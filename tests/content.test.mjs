import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  villas,
  filterVillas,
  offers,
  image,
  enquiryDraft,
  contact,
} from "../src/content.js";

test("villa filters combine bedroom count and water feature and can return no results", () => {
  assert.equal(filterVillas(villas).length, 6);
  assert.deepEqual(
    filterVillas(villas, "2", "Private pool").map((v) => v.id),
    ["melati-pool"],
  );
  assert.equal(filterVillas(villas, "4", "Private jacuzzi").length, 0);
  assert.equal(filterVillas(villas, "1", "Private jacuzzi").length, 2);
});
test("selected media use HTTPS hotel sources and preserve villa provenance", () => {
  const provenance = JSON.parse(
    readFileSync(new URL("../docs/media-sources.json", import.meta.url)),
  );
  for (const v of villas) {
    for (const id of [v.image, ...v.gallery]) {
      assert.ok(image(id), "missing image id " + id);
      assert.equal(new URL(image(id)).protocol, "https:");
    }
    for (const id of v.gallery) {
      const p = provenance.find((p) => p.url === image(id));
      assert.ok(
        p.sources.some((source) => source.includes(v.source)),
        v.id + " gallery provenance " + id,
      );
    }
    assert.ok(v.size > 0 && v.adults > 0);
  }
  for (const o of offers)
    assert.equal(new URL(image(o.image)).protocol, "https:");
});
test("email draft trims input, encodes user content, and never sends data", () => {
  const d = enquiryDraft({
    name: "  Mira & Co  ",
    email: "mira@example.com",
    interest: "Dining & lounge",
    message: "A table?\nFor two #1 + guest",
  });
  const u = new URL(d.url);
  assert.equal(u.protocol, "mailto:");
  assert.equal(u.pathname, contact.email);
  assert.equal(
    u.searchParams.get("subject"),
    "The Royal Purnama enquiry — Dining & lounge",
  );
  assert.match(u.searchParams.get("body"), /^Name: Mira & Co\n/);
  assert.match(u.searchParams.get("body"), /For two #1 \+ guest$/);
});
test("portfolio tokens use system fonts and retain the source palette", () => {
  const css = readFileSync(
    new URL("../public/design-system/design-tokens.css", import.meta.url),
    "utf8",
  );
  assert.match(css, /--trp-font-family-body: Arial/);
  assert.match(css, /--trp-font-family-heading: Georgia/);
  assert.match(css, /--trp-color-palette-cream: rgb\(244 241 231/);
});
