import documents from "../documents.json";
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
import { venues } from "../content.js";

const menuLinks = [
  ["Breakfast", "0151-Breakfast-Menu.pdf"],
  [
    "All-day dining",
    "0152-all-day-menu-ss-restaurant-new-price-06-july-26.pdf",
  ],
  ["Vegan & vegetarian", "0153-menu-vegan.pdf"],
  ["Gluten free", "0154-menu-glutten-free.pdf"],
  ["Beverages", "0155-drink-list-menu-ss-5-june-2026.pdf"],
  ["Afternoon tea", "0156-AFTERNOON TEA MENU SS.pdf"],
];

export function Dining() {
  return (
    <>
      <Hero
        title={
          <>
            The coast,
            <br />
            beautifully savoured.
          </>
        }
        label="Dining & lounge"
        photo={159}
        description="Seaside tables, locally inspired flavours, and afternoons that become evenings."
      />
      <PageIntro
        label="A place at our table"
        title="Good food. Better company."
      >
        From an oceanfront restaurant to a relaxed beach lounge, discover a
        setting for every mood.
      </PageIntro>
      {venues.map((v, i) => (
        <section
          className={"section venue-row " + (i % 2 ? "reverse" : "")}
          key={v.name}
        >
          <Photo id={v.image} alt={v.fullName} />
          <div>
            <Eyebrow>
              {v.category} · 0{i + 1}
            </Eyebrow>
            <h2>{v.fullName}</h2>
            <p>{v.description}</p>
            <p className="fine-print">{v.note}</p>
            <TextLink to="/contact">Enquire about a table</TextLink>
            {v.menus && (
              <div className="menu-downloads">
                <h3>Explore the menus</h3>
                {menuLinks.map(([label, file]) => (
                  <a
                    href={documents[file]}
                    key={file}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {label}
                    <span>PDF ↗</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
      <section className="section soft-section">
        <SectionHeading
          label="Make a moment of it"
          title="A little more personal."
        >
          Ask about private dining, a beach picnic, a cooking class, or a
          floating breakfast in your pool villa.
        </SectionHeading>
        <div className="two-grid">
          <Photo
            id={20}
            alt="Private pool and open-air space at Sunrise Villa"
          />
          <div className="inset-copy">
            <h3>
              From a slow morning
              <br />
              to a night to remember.
            </h3>
            <p>
              Our team can help you choose an experience for your stay. Menus,
              times, inclusions, and availability are confirmed when you
              enquire.
            </p>
            <a
              className="text-link"
              href="https://theroyalpurnama.com/storage/app/media/bespoke-new-2026.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Bespoke experiences brochure
              <Arrow diagonal />
            </a>
            <TextLink to="/contact">Plan something special</TextLink>
          </div>
        </div>
      </section>
      <StayBanner />
    </>
  );
}
