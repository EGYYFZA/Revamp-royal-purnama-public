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
import { offers } from "../content.js";

export function Offers({ open }) {
  return (
    <>
      <Hero
        title="Stay for something more."
        label="Thoughtful escapes"
        photo={20}
        description="A little longer together. A meaningful ritual. An escape shaped around you."
      />
      <PageIntro label="Your next chapter" title="Find your kind of escape.">
        Explore selected packages from The Royal Purnama. Contact our
        reservations team for current availability, inclusions, and booking
        terms.
      </PageIntro>
      <section className="section offers-list">
        <div className="two-grid">
          {offers.map((o) => (
            <OfferCard key={o.id} offer={o} open={open} />
          ))}
        </div>
        <p className="fine-print">
          Availability, inclusions, rates, and booking terms are confirmed with
          our reservations team at the time of booking.
        </p>
      </section>
      <StayBanner />
    </>
  );
}
