import * as esbuild from "esbuild";
import { cp, mkdir, access, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";

const root = fileURLToPath(new URL("../", import.meta.url));
process.chdir(root);
const serve = process.argv.includes("--serve");
const preview = process.argv.includes("--preview");
const options = {
  absWorkingDir: root,
  entryPoints: [path.join(root, "src/main.jsx")],
  bundle: true,
  outdir: "dist",
  entryNames: "app",
  tsconfigRaw: { compilerOptions: {} },
  assetNames: "assets/[name]-[hash]",
  minify: !serve,
  sourcemap: serve,
  jsx: "automatic",
  target: ["es2022"],
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      serve ? "development" : "production",
    ),
  },
};
// The managed Windows sandbox blocks native ancestor scans; Node resolves files inside the project.
// shortcut: This resolver targets the current React packages; review browser export conditions before adding other packages.
options.plugins = [
  {
    name: "project-files",
    setup(build) {
      build.onResolve({ filter: /.*/ }, (args) => {
        const file = path.isAbsolute(args.path)
          ? args.path
          : args.path.startsWith(".")
            ? path.resolve(path.dirname(args.importer), args.path)
            : createRequire(
                args.importer || path.join(root, "package.json"),
              ).resolve(args.path);
        return { path: file, namespace: "project" };
      });
      build.onLoad({ filter: /.*/, namespace: "project" }, async (args) => ({
        contents: await readFile(args.path, "utf8"),
        loader:
          path.extname(args.path).slice(1) === "jsx"
            ? "jsx"
            : path.extname(args.path).slice(1) === "css"
              ? "css"
              : path.extname(args.path).slice(1) === "json"
                ? "json"
                : "js",
        watchFiles: [args.path],
      }));
    },
  },
];
if (!preview) {
  const output = path.resolve(root, "dist");
  if (path.dirname(output) !== path.resolve(root))
    throw new Error("Build output must stay inside this project.");
  await rm(output, { recursive: true, force: true });
  await mkdir("dist", { recursive: true });
  await cp("public", "dist", { recursive: true });
}
if (serve || preview) {
  if (preview) await access("dist/app.js");
  const context = await esbuild.context(
    preview
      ? {
          absWorkingDir: root,
          stdin: { contents: "", loader: "js" },
          write: false,
        }
      : options,
  );
  const server = await context.serve({
    servedir: path.join(root, "dist"),
    host: "127.0.0.1",
    port: 5173,
  });
  console.log("The Royal Purnama: http://localhost:" + server.port + "/");
  console.log("Figma capture: http://localhost:" + server.port + "/?capture=1");
  console.log(
    preview
      ? "Production preview. Run npm run build after edits, then refresh. Press Ctrl+C to stop."
      : "Press Ctrl+C to stop. Refresh after editing src/. Restart after editing public/.",
  );
} else {
  await esbuild.build(options);
  console.log("Production build ready in dist/.");
}
