import { useState } from "react";
import { villas, filterVillas } from "../content.js";
import {
  Arrow,
  Hero,
  PageIntro,
  Link,
  Photo,
  Eyebrow,
  Specs,
  TextLink,
  Book,
} from "../components/ui.jsx";
import { StayBanner } from "../components/Site.jsx";

export function Villas() {
  const [bedrooms, setBedrooms] = useState("all"),
    [water, setWater] = useState("all");
  const filtered = filterVillas(villas, bedrooms, water);
  function reset() {
    setBedrooms("all");
    setWater("all");
  }
  return (
    <>
      <Hero
        title="Your own piece of Bali."
        label="Villas & suites"
        photo={322}
        description="Private pools, veranda jacuzzis, and thoughtful Balinese details. A retreat for every kind of together."
      />
      <PageIntro label="Stay, your way" title="Six ways to slow down.">
        Choose space for two or room to gather. Every villa and suite is
        designed around privacy, comfort, and the warmth of Bali.
      </PageIntro>
      <section className="section villa-list">
        <div className="filter-bar">
          <div className="filter-fields">
            <label>
              Bedrooms
              <select
                id="filter-bedrooms"
                name="bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              >
                <option value="all">All bedrooms</option>
                <option value="1">One bedroom</option>
                <option value="2">Two bedrooms</option>
                <option value="4">Four bedrooms</option>
              </select>
            </label>
            <label>
              Pool or jacuzzi
              <select
                id="filter-water"
                name="water"
                value={water}
                onChange={(e) => setWater(e.target.value)}
              >
                <option value="all">All retreats</option>
                <option>Private pool</option>
                <option>Private jacuzzi</option>
              </select>
            </label>
          </div>
          <p role="status">
            {filtered.length} {filtered.length === 1 ? "retreat" : "retreats"}{" "}
            found
          </p>
          <button className="text-link" onClick={reset}>
            Reset filters
          </button>
        </div>
        {filtered.length ? (
          <div className="villa-grid">
            {filtered.map((v) => (
              <article className="villa-card" key={v.id}>
                <Link
                  to={"/villas/" + v.id}
                  aria-label={"Discover " + v.type + " — " + v.name}
                >
                  <Photo id={v.image} alt={v.type + " — " + v.name} />
                </Link>
                <Eyebrow>{v.type}</Eyebrow>
                <h2>{v.name}</h2>
                <Specs villa={v} />
                <p>{v.summary}</p>
                <div className="card-actions">
                  <TextLink to={"/villas/" + v.id}>View villa details</TextLink>
                  <Book className="text-link">Book</Book>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>A different combination?</h2>
            <p>
              No retreats match these filters. Reset them to explore all villas
              and suites.
            </p>
            <button className="button" onClick={reset}>
              Reset filters
              <Arrow />
            </button>
          </div>
        )}
      </section>
      <StayBanner />
    </>
  );
}

export function VillaDetail({ villa: v }) {
  return (
    <>
      <Hero
        title={v.name}
        label={v.type}
        photo={v.image}
        description={v.summary}
      />
      <section className="section detail-intro">
        <div>
          <Eyebrow>Your private sanctuary</Eyebrow>
          <h2>
            Space to be
            <br />
            completely yourself.
          </h2>
          <Specs villa={v} />
          <p>
            {v.beds} · {v.bedrooms} {v.bedrooms === 1 ? "bedroom" : "bedrooms"}
          </p>
        </div>
        <div>
          {v.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <Book />
          <p className="fine-print">
            Availability, rates, and booking conditions are confirmed on our
            official booking website.
          </p>
        </div>
      </section>
      <section
        className="section gallery-section"
        aria-labelledby="gallery-title"
      >
        <Eyebrow>A closer look</Eyebrow>
        <h2 id="gallery-title">The details make the difference.</h2>
        <div className="detail-gallery">
          {v.gallery.map((id, i) => (
            <Photo
              id={id}
              key={id}
              className={id === 92 ? "floorplan" : ""}
              alt={
                id === 92
                  ? "Floor plan of the Jepun Pool Villa"
                  : v.name +
                    " — " +
                    [
                      "interior and private spaces",
                      "a closer view of the villa",
                      "another view of your retreat",
                      "Balinese details",
                    ][i]
              }
            />
          ))}
        </div>
      </section>
      <section className="section amenities">
        <div>
          <Eyebrow>Thoughtfully appointed</Eyebrow>
          <h2>Yours to enjoy.</h2>
        </div>
        <ul>
          {v.amenities.map((a) => (
            <li key={a}>
              <span aria-hidden="true">✧</span>
              {a}
            </li>
          ))}
        </ul>
      </section>
      <section className="section related">
        <TextLink to="/villas">Compare all villas & suites</TextLink>
      </section>
      <StayBanner />
    </>
  );
}
