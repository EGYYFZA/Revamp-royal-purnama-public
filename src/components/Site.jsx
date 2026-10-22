import { useEffect, useRef, useState } from "react";
import { contact, navigation, faqs, image } from "../content.js";
import { capture } from "../config.js";
import { Arrow, Link, Book, TextLink, Brand, Eyebrow, Photo } from "./ui.jsx";

export function Header({ open, route }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 60);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header className="site-header" data-scrolled={scrolled}>
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(([label, to]) => (
          <Link
            key={to}
            to={to}
            aria-current={
              route === to || route.startsWith(to + "/") ? "page" : undefined
            }
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <Book className="button compact">Book a stay</Book>
        <button
          className="menu-button"
          aria-label="Open navigation menu"
          aria-haspopup="dialog"
          onClick={() => open({ kind: "menu" })}
        >
          <span></span>
          <span></span>
          <span className="sr-only">Menu</span>
        </button>
      </div>
    </header>
  );
}

export function FAQ() {
  return (
    <section className="section faq-section">
      <div>
        <Eyebrow>A little clarity</Eyebrow>
        <h2>
          Before you
          <br />
          arrive.
        </h2>
        <TextLink to="/contact">Ask us anything</TextLink>
      </div>
      <div className="faq-list">
        {faqs.map(([q, a], i) => (
          <details key={q} open={capture || undefined}>
            <summary>
              <span className="faq-number">0{i + 1}</span>
              <span>{q}</span>
              <span className="faq-plus" aria-hidden="true">
                +
              </span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function StayBanner() {
  return (
    <section className="stay-banner">
      <div>
        <Eyebrow>Your next quiet chapter</Eyebrow>
        <h2>
          We’ll keep a little
          <br />
          Bali for you.
        </h2>
      </div>
      <div>
        <Book className="button light" />
        <p>Book directly with The Royal Purnama.</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Brand inverse />
          <p>
            An adults-only retreat on
            <br />
            Bali’s black-sand coast.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-link"
            href={contact.map}
          >
            Purnama Beach, Bali
            <Arrow diagonal />
          </a>
        </div>
        <nav aria-label="Explore the resort">
          <h2>Explore</h2>
          {navigation.map(([label, to]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
          <Link to="/weddings">Intimate weddings</Link>
        </nav>
        <nav aria-label="Find your retreat">
          <h2>Your retreat</h2>
          <Link to="/villas/jepun-jacuzzi-king">Jepun Jacuzzi Suites</Link>
          <Link to="/villas/jepun-pool">Jepun Pool Villa</Link>
          <Link to="/villas/cempaka-pool">Cempaka Pool Villa</Link>
          <Link to="/villas/melati-pool">Melati Pool Villa</Link>
          <Link to="/villas/sunrise-presidential">
            Sunrise Presidential Villa
          </Link>
        </nav>
        <div className="footer-contact">
          <h2>Let’s stay in touch</h2>
          <a href={"mailto:" + contact.email}>{contact.email}</a>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a target="_blank" rel="noreferrer" href={contact.whatsappHref}>
            WhatsApp
            <Arrow diagonal />
          </a>
          <p>{contact.address}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} The Royal Purnama</span>
        <Link to="/privacy">Privacy</Link>
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "instant"
                : "smooth",
            });
            document
              .querySelector(".skip-link")
              ?.focus({ preventScroll: true });
          }}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

export function Dialog({ modal, close }) {
  const ref = useRef(null);
  const [videoState, setVideoState] = useState("loading");
  useEffect(() => {
    const d = ref.current;
    if (modal) {
      setVideoState("loading");
      d.showModal();
      document.body.style.overflow = "hidden";
    } else if (d.open) d.close();
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);
  return (
    <dialog
      ref={ref}
      className={"site-dialog " + (modal?.kind === "menu" ? "nav-dialog" : "")}
      aria-labelledby="dialog-title"
      onClose={close}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const items = [
          ...event.currentTarget.querySelectorAll(
            'button:not([disabled]), a[href], video[controls], [tabindex="0"]',
          ),
        ].filter((item) => item.getClientRects().length);
        const first = items[0];
        const last = items.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          const r = e.currentTarget.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            close();
        }
      }}
    >
      <button
        className="dialog-close"
        onClick={close}
        aria-label="Close dialog"
      >
        Close <span aria-hidden="true">×</span>
      </button>
      {modal?.kind === "menu" && (
        <div className="menu-layout">
          <div className="menu-image">
            <Photo id={321} alt="" eager />
            <span>Purnama Beach · Bali</span>
          </div>
          <div className="menu-content">
            <Eyebrow>The Royal Purnama</Eyebrow>
            <h2 id="dialog-title">Make yourself at home.</h2>
            <nav aria-label="Full navigation">
              {[
                ["Home", "/"],
                ...navigation,
                ["Intimate weddings", "/weddings"],
              ].map(([label, to], i) => (
                <Link to={to} key={to} onClick={close}>
                  <span>0{i + 1}</span>
                  {label}
                  <Arrow />
                </Link>
              ))}
            </nav>
            <Book />
          </div>
        </div>
      )}
      {modal?.kind === "film" && (
        <>
          <Eyebrow>A glimpse of Purnama</Eyebrow>
          <h2 id="dialog-title">A return to balance.</h2>
          <video
            controls
            playsInline
            preload="metadata"
            aria-describedby="film-description"
            poster={image(248)}
            onCanPlay={() => setVideoState("ready")}
            onWaiting={() => setVideoState("loading")}
            onPlaying={() => setVideoState("ready")}
            onError={() => setVideoState("error")}
          >
            <source src="https://theroyalpurnama.b-cdn.net/storage/app/media/theroyalpurnama-videos.webm" type="video/webm" />
          </video>
          <p id="film-description" className="fine-print">
            A visual introduction to our beachfront setting, Balinese interiors,
            pools, gardens, dining, and wellness spaces. Explore the same places
            in the photographs and descriptions throughout this website.
          </p>
          <p className="fine-print" role="status">
            {videoState === "loading"
              ? "Preparing the resort film. Use Play when you are ready."
              : videoState === "error"
                ? "The film could not load. You can close this window and continue exploring."
                : "A visual tour of the resort. Playback is under your control."}
          </p>
          {videoState === "error" && (
            <a
              className="text-link"
              href="https://theroyalpurnama.b-cdn.net/storage/app/media/theroyalpurnama-videos.webm"
              target="_blank"
              rel="noreferrer"
            >
              Open the film directly
              <Arrow diagonal />
            </a>
          )}
        </>
      )}
      {modal?.kind === "offer" && (
        <>
          <Eyebrow>{modal.offer.label}</Eyebrow>
          <h2 id="dialog-title">{modal.offer.original}</h2>
          <p>{modal.offer.description}</p>
          <h3>Selected inclusions</h3>
          <ul className="offer-benefits">
            {modal.offer.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="fine-print">{modal.offer.terms}</p>
          <div className="dialog-actions">
            <TextLink to="/contact" onClick={close}>
              Ask reservations
            </TextLink>
            <a
              className="text-link"
              href={"https://theroyalpurnama.com" + modal.offer.source}
              target="_blank"
              rel="noreferrer"
            >
              Current official offer
              <Arrow diagonal />
            </a>
          </div>
        </>
      )}
      <button className="dialog-end text-link" onClick={close}>
        Back to exploring <Arrow />
      </button>
    </dialog>
  );
}
