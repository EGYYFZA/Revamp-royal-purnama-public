import { useState } from "react";
import { villas, offers, experiences } from "../content.js";
import {
  Hero,
  Eyebrow,
  TextLink,
  Photo,
  SectionHeading,
  Specs,
  OfferCard,
  Arrow,
  PhotoRail,
} from "../components/ui.jsx";
import { FAQ, StayBanner } from "../components/Site.jsx";

export function FeaturedVillas() {
  const [index, setIndex] = useState(3);
  const v = villas[index];
  return (
    <section className="section villas-section" aria-labelledby="villas-title">
      <SectionHeading
        label="Your private sanctuary"
        title={
          <span id="villas-title">
            A space to call
            <br />
            your own.
          </span>
        }
        to="/villas"
        action="Explore all villas & suites"
      >
        From an intimate jacuzzi suite to a private beachfront residence. Find
        the retreat that feels like you.
      </SectionHeading>
      <div className="villa-selector" aria-label="Choose a villa to preview">
        {villas.map((villa, i) => (
          <button
            key={villa.id}
            aria-pressed={index === i}
            onClick={() => setIndex(i)}
          >
            <span>{String(i + 1).padStart(2, "0")}</span>
            {villa.name}
            <small>
              {villa.water === "Private jacuzzi"
                ? i === 0
                  ? "Jacuzzi · King"
                  : "Jacuzzi · Twin"
                : `${villa.bedrooms} bedroom${villa.bedrooms > 1 ? "s" : ""}`}
            </small>
          </button>
        ))}
      </div>
      <div className="villa-stage">
        <button
          className="villa-neighbour previous"
          aria-label="Previous villa"
          onClick={() => setIndex((index + 5) % 6)}
        >
          <Photo id={villas[(index + 5) % 6].image} alt="" />
          <span>
            <Arrow /> <span>Previous villa</span>
          </span>
        </button>
        <Photo
          key={v.id}
          id={v.image}
          alt={v.type + " — " + v.name}
          className="villa-feature-photo scene-change"
          eager
        />
        <button
          className="villa-neighbour next"
          aria-label="Next villa"
          onClick={() => setIndex((index + 1) % 6)}
        >
          <Photo id={villas[(index + 1) % 6].image} alt="" />
          <span>
            <span>Next villa</span> <Arrow />
          </span>
        </button>
      </div>
      <div className="villa-feature">
        <div className="villa-feature-content">
          <div className="feature-top">
            <Eyebrow>Villas & suites</Eyebrow>
            <span className="counter">
              {String(index + 1).padStart(2, "0")} / 06
            </span>
          </div>
          <div
            className="villa-feature-details"
            aria-live="polite"
            aria-atomic="true"
          >
            <div>
              <h3>{v.name}</h3>
              <p className="villa-type">{v.type}</p>
              <TextLink to={"/villas/" + v.id}>Discover {v.name}</TextLink>
            </div>
            <div>
              <Specs villa={v} />
              <p>{v.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Home({ open }) {
  return (
    <>
      <Hero
        home
        open={open}
        title={
          <>
            Not just a stay.
            <br />A return to balance.
          </>
        }
        label="The Royal Purnama · Adults only"
      />
      <div className="place-strip">
        <span>Black-sand shores</span>
        <span className="strip-dot" aria-hidden="true">
          ✧
        </span>
        <span>Balinese soul</span>
        <span className="strip-dot" aria-hidden="true">
          ✧
        </span>
        <span>Space for stillness</span>
      </div>
      <section className="section intro">
        <div className="intro-title">
          <Eyebrow>A different rhythm of Bali</Eyebrow>
          <h2>
            Some places are
            <br />
            meant to be felt.
          </h2>
        </div>
        <div className="intro-copy">
          <p className="lead">
            Between black-sand shores and rice fields, a quieter Bali awaits.
          </p>
          <p>
            At The Royal Purnama, handcrafted Balinese details meet the ease of
            a private coastal retreat. Wake slowly. Follow the sea breeze.
            Rediscover the pleasure of time together.
          </p>
          <p>
            Created exclusively for adults, our beachfront villas and suites
            offer privacy, warmth, and room to reconnect.
          </p>
          <TextLink to="/experiences">Discover life at Purnama</TextLink>
        </div>
        <Photo
          id={14}
          alt="Aerial view of The Royal Purnama between Purnama Beach and rice fields"
          className="intro-landscape"
        />
        <div className="intro-detail">
          <Photo
            id={321}
            alt="Morning light on the beachfront pool at The Royal Purnama"
          />
          <span className="image-caption">Purnama Beach · Bali</span>
        </div>
      </section>
      <FeaturedVillas />
      <section className="dining-story">
        <div className="dining-heading">
          <div>
            <Eyebrow>Dining & lounge</Eyebrow>
            <h2>
              Stay for the flavour.
              <br />
              Linger for the view.
            </h2>
          </div>
          <p>
            Locally inspired plates. A garden by the sea. A favourite drink as
            the afternoon unfolds. Discover three distinct ways to savour
            Purnama.
          </p>
        </div>
        <Photo
          id={28}
          alt="Handcrafted interiors of Standing Stones Beach Restaurant"
          className="dining-photo"
        />
        <div className="dining-foot">
          <TextLink to="/dining">A taste of the coast</TextLink>
          <span className="caption">
            Standing Stones · Moonstone · Stone Bar
          </span>
        </div>
      </section>
      <section className="section wellness-story">
        <div className="wellness-copy">
          <Eyebrow>Volcanic wellness</Eyebrow>
          <h2>
            Grounded in Bali.
            <br />
            Made for you.
          </h2>
          <p className="lead">
            A moment to be still.
            <br />A little closer to yourself.
          </p>
          <p>
            Inspired by the earth, the sea, and our volcanic coastline, Black
            Sand Spa brings together traditional Balinese touch and deeply
            restful rituals.
          </p>
          <TextLink to="/wellness">Explore your ritual</TextLink>
        </div>
        <Photo
          id={31}
          alt="Couple treatment room at Black Sand Spa, opening to the coastal garden"
          className="wellness-photo"
        />
        <span className="vertical-caption" aria-hidden="true">
          REST · RECONNECT · RENEW
        </span>
      </section>
      <section className="section moments">
        <SectionHeading
          label="Time, beautifully spent"
          title={
            <>
              Follow a feeling.
              <br />
              Find a memory.
            </>
          }
          to="/experiences"
          action="All experiences"
        >
          An unhurried lunch. A meaningful ritual. A promise made beside the
          ocean. Make this time your own.
        </SectionHeading>
        <PhotoRail label="experiences">
          {experiences.map((e, i) => (
            <article className="editorial-card" key={e.name}>
              <Photo id={e.image} alt={e.name + " at The Royal Purnama"} />
              <div className="card-label">
                <Eyebrow>{e.category}</Eyebrow>
                <span>0{i + 1}</span>
              </div>
              <h3>{e.name}</h3>
              <p>{e.description}</p>
              <TextLink to={e.link}>{e.action}</TextLink>
            </article>
          ))}
        </PhotoRail>
      </section>
      <section className="coast-pause">
        <Photo
          id={321}
          alt="Sunrise reflected in the beachfront pool at The Royal Purnama"
        />
        <div className="coast-caption">
          <Eyebrow>Purnama, at your pace</Eyebrow>
          <h2>
            Let the world wait
            <br />a little longer.
          </h2>
        </div>
      </section>
      <section className="section offers-section">
        <SectionHeading
          label="Thoughtful escapes"
          title="More time. More meaning."
          to="/offers"
          action="Discover all offers"
        >
          Find a stay with the moments you value most. Our team will help you
          choose the right escape.
        </SectionHeading>
        <div className="three-grid">
          {offers.slice(0, 3).map((o) => (
            <OfferCard key={o.id} offer={o} open={open} />
          ))}
        </div>
      </section>
      <FAQ />
      <StayBanner />
    </>
  );
}
