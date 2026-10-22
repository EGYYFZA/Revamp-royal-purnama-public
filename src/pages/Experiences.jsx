import {
  Hero,
  PageIntro,
  Photo,
  Eyebrow,
  TextLink,
  SectionHeading,
  Arrow,
  OfferCard,
} from "../components/ui.jsx";
import { StayBanner } from "../components/Site.jsx";
import { experiences } from "../content.js";

export function Experiences() {
  return (
    <>
      <Hero
        title={
          <>
            Less to do.
            <br />
            More to feel.
          </>
        }
        label="Life at Purnama"
        photo={248}
        description="Give your day a little freedom. The best moments rarely need an itinerary."
      />
      <PageIntro label="Stay curious" title="A day that belongs to you.">
        A seaside lunch, a traditional ritual, a quiet swim. Follow the rhythm
        of Bali and discover the places that make this coast special.
      </PageIntro>
      <section className="section">
        <div className="three-grid">
          {experiences.map((e) => (
            <article className="editorial-card" key={e.name}>
              <Photo id={e.image} alt={e.name} />
              <Eyebrow>{e.category}</Eyebrow>
              <h2>{e.name}</h2>
              <p>{e.description}</p>
              <TextLink to={e.link}>{e.action}</TextLink>
            </article>
          ))}
        </div>
      </section>
      <section className="section facilities-section">
        <SectionHeading
          label="Within the resort"
          title="Everything at your pace."
        >
          Swim among the standing stones, keep your daily rhythm at the gym, or
          discover handcrafted pieces in our boutique.
        </SectionHeading>
        <div className="three-grid">
          {[
            [
              248,
              "The beachfront pool",
              "Ocean views, sculptural stones, and room to relax.",
            ],
            [286, "The gym", "Space for your daily movement during your stay."],
            [
              285,
              "The boutique",
              "A curated collection of clothing, accessories, and local handicrafts.",
            ],
          ].map(([id, name, desc]) => (
            <article className="editorial-card" key={id}>
              <Photo id={id} alt={name + " at The Royal Purnama"} />
              <h3>{name}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section destination">
        <div>
          <Eyebrow>Beyond your villa</Eyebrow>
          <h2>
            A little further.
            <br />A deeper connection.
          </h2>
        </div>
        <div>
          <p>
            Discover Bali beyond the resort with our collected destination
            guides. Ask our team about suitable activities, transport,
            schedules, and any additional charges.
          </p>
          <a
            className="text-link"
            target="_blank"
            rel="noreferrer"
            href="https://theroyalpurnama.com/storage/app/media/WHAT-TO-DO.pdf"
          >
            What to do · PDF
            <Arrow diagonal />
          </a>
          <a
            className="text-link"
            target="_blank"
            rel="noreferrer"
            href="https://theroyalpurnama.com/storage/app/media/WHERE-TO-GO.pdf"
          >
            Where to go · PDF
            <Arrow diagonal />
          </a>
          <TextLink to="/contact">Ask our team</TextLink>
        </div>
      </section>
      <StayBanner />
    </>
  );
}
