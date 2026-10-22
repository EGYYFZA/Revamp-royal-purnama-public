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
import { contact } from "../content.js";

export function Weddings() {
  return (
    <>
      <Hero
        title={
          <>
            A promise.
            <br />
            An ocean.
            <br />
            Your people.
          </>
        }
        label="Intimate weddings"
        photo={226}
        description="A celebration of connection, on Bali’s black-sand shore."
      />
      <PageIntro label="A moment that is yours" title="Beautifully personal.">
        Ocean views, sculptural standing stones, and intimate private spaces
        create a meaningful setting for your celebration.
      </PageIntro>
      <section className="section venue-row">
        <Photo
          id={229}
          alt="Wedding celebration setting at The Royal Purnama"
        />
        <div>
          <Eyebrow>Thoughtfully brought together</Eyebrow>
          <h2>
            Let your story
            <br />
            set the scene.
          </h2>
          <p>
            From an intimate ceremony to a dinner with those closest to you, our
            team will help shape a celebration around your wishes. Share your
            date, guest count, and ideas so we can recommend the right setting.
          </p>
          <TextLink to="/contact">Enquire about your wedding</TextLink>
          <a
            className="text-link"
            href="https://theroyalpurnama.com/storage/app/media/pdf/WEDDING_BOOKLET_TRP.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Wedding brochure · PDF
            <Arrow diagonal />
          </a>
        </div>
      </section>
      <section className="section destination">
        <h2>Begin with a conversation.</h2>
        <div>
          <p>
            Every celebration begins with the details that matter to you.
            Availability, venue arrangements, menus, and guest policies are
            confirmed by our events team.
          </p>
          <a
            href={"mailto:" + contact.email + "?subject=Wedding%20enquiry"}
            className="text-link"
          >
            Speak to our team
            <Arrow diagonal />
          </a>
        </div>
      </section>
      <StayBanner />
    </>
  );
}
