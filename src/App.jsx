import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import { capture } from "./config.js";
import { usePageMotion } from "./usePageMotion.js";
import { villas } from "./content.js";
import { Header, Footer, Dialog } from "./components/Site.jsx";
import { Home } from "./pages/Home.jsx";
import { Villas, VillaDetail } from "./pages/Villas.jsx";
import { Dining } from "./pages/Dining.jsx";
import { Wellness } from "./pages/Wellness.jsx";
import { Offers } from "./pages/Offers.jsx";
import { Experiences } from "./pages/Experiences.jsx";
import { Weddings } from "./pages/Weddings.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Privacy, NotFound } from "./pages/Static.jsx";

const pages = {
  "/": Home,
  "/villas": Villas,
  "/dining": Dining,
  "/wellness": Wellness,
  "/offers": Offers,
  "/experiences": Experiences,
  "/weddings": Weddings,
  "/contact": Contact,
  "/privacy": Privacy,
};

export function App() {
  const [route, setRoute] = useState(location.hash.slice(1) || "/"),
    [modal, setModal] = useState(null);
  const first = useRef(true);
  const main = useRef(null);
  const transition = useRef(null);
  usePageMotion(main, route);
  useEffect(() => {
    const change = () => {
      transition.current?.skipTransition();
      const update = () =>
        flushSync(() => {
          setRoute(location.hash.slice(1) || "/");
          setModal(null);
        });
      if (
        !capture &&
        !matchMedia("(prefers-reduced-motion: reduce)").matches &&
        document.startViewTransition &&
        document.visibilityState === "visible"
      ) {
        transition.current = document.startViewTransition(update);
        // Rapid navigation deliberately skips the previous visual transition.
        transition.current.ready.catch((error) => {
          if (error.name !== "AbortError") console.error(error);
        });
      } else update();
    };
    window.addEventListener("hashchange", change);
    return () => window.removeEventListener("hashchange", change);
  }, []);
  useEffect(() => {
    const titles = {
      "/": "A return to balance",
      "/villas": "Villas & suites",
      "/dining": "Dining & lounge",
      "/wellness": "Volcanic wellness",
      "/offers": "Thoughtful escapes",
      "/experiences": "Life at Purnama",
      "/weddings": "Intimate weddings",
      "/contact": "Get in touch",
      "/privacy": "Privacy",
    };
    const v = villas.find((v) => route === "/villas/" + v.id);
    document.title =
      (v ? v.name + " — " + v.type : titles[route] || "Page not found") +
      " | The Royal Purnama";
    window.scrollTo({ top: 0, behavior: "instant" });
    if (!first.current)
      document.getElementById("main-content")?.focus({ preventScroll: true });
    first.current = false;
  }, [route]);
  const Page = pages[route],
    villa = villas.find((v) => route === "/villas/" + v.id);
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main-content")?.focus();
        }}
      >
        Skip to content
      </a>
      <Header open={setModal} route={route} />
      <main id="main-content" ref={main} tabIndex="-1" key={route}>
        {Page ? (
          <Page open={setModal} />
        ) : villa ? (
          <VillaDetail villa={villa} />
        ) : (
          <NotFound />
        )}
      </main>
      <Footer />
      <Dialog modal={modal} close={() => setModal(null)} />
    </>
  );
}

export default App;
