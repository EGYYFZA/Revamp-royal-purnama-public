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
import { treatments } from "../content.js";

export function Wellness() {
  return (
    <>
      <Hero
        title={
          <>
            Return to
            <br />
            your own rhythm.
          </>
        }
        label="Volcanic wellness"
        photo={31}
        description="Rooted in Balinese tradition. Inspired by the earth, the sea, and the volcanic coast."
      />
      <PageIntro label="Black Sand Spa" title="Make space for stillness.">
        Private treatment rooms, traditional Balinese touch, and rituals
        designed to invite rest. Our team will help you choose an experience
        that feels right for you.
      </PageIntro>
      <section className="section wellness-feature">
        <Photo
          id={305}
          alt="Volcanic sand spa ritual on Purnama’s black-sand coast"
        />
        <div>
          <Eyebrow>Inspired by our coastline</Eyebrow>
          <h2>
            Earth. Sea.
            <br />A quieter you.
          </h2>
          <p>
            Discover the signature volcanic sand ritual, couple treatment suites
            with oversized bathtubs, and a menu of massages, facials, and
            reflexology.
          </p>
          <p>
            Explore the programme with our spa team and share your preferences
            before your visit.
          </p>
          <a
            className="text-link"
            target="_blank"
            rel="noreferrer"
            href="https://theroyalpurnama.com/storage/app/media/BlackSand-SPA-Menu-2026.pdf"
          >
            View spa menu · PDF
            <Arrow diagonal />
          </a>
          <TextLink to="/contact">Arrange your spa visit</TextLink>
        </div>
      </section>
      <section className="section">
        <SectionHeading
          label="Your time to reconnect"
          title="Find your ritual."
        >
          Choose a mindful pause or a traditional treatment. Advance
          reservations are recommended.
        </SectionHeading>
        <div className="two-grid treatment-grid">
          {treatments.map((t) => (
            <article className="treatment" key={t.name}>
              <Photo
                id={t.image}
                alt={t.name + " experience at The Royal Purnama"}
              />
              <Eyebrow>{t.category}</Eyebrow>
              <h3>{t.name}</h3>
              <p>{t.description}</p>
              <span className="caption">{t.duration}</span>
              <TextLink to="/contact">Enquire about this ritual</TextLink>
            </article>
          ))}
        </div>
        <p className="fine-print wellness-note">
          Choose an experience at your own pace. Our spa team can discuss your
          preferences, treatment details, and availability before your visit.
        </p>
      </section>
      <StayBanner />
    </>
  );
}
