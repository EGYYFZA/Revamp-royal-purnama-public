import { useState, useRef, useEffect } from "react";
import { bookingUrl, image } from "../content.js";
import { capture } from "../config.js";

export function Arrow({ diagonal = false }) {
  return (
    <span aria-hidden="true" className="arrow">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

export function Link({ to, children, className = "", ...props }) {
  return (
    <a href={"#" + to} className={className} {...props}>
      {children}
    </a>
  );
}

export function Book({
  children = "Book your stay",
  className = "button",
  ...props
}) {
  return (
    <a href={bookingUrl} className={className} {...props}>
      {children}
      <Arrow diagonal />
    </a>
  );
}

export function TextLink({ to, children, ...props }) {
  return (
    <Link to={to} className="text-link" {...props}>
      {children}
      <Arrow />
    </Link>
  );
}

export function Photo({ id, alt, className = "", eager = false, ...props }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className={"photo " + className} data-reveal="image" {...props}>
      {failed ? (
        <div className="photo-fallback" role="img" aria-label={alt}>
          <span>Photograph unavailable</span>
          <small>The details below are still available.</small>
        </div>
      ) : (
        <img
          src={image(id)}
          alt={alt}
          loading={eager || capture ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={eager ? "high" : "auto"}
          onError={() => setFailed(true)}
        />
      )}
      <span className="photo-shutter" aria-hidden="true" />
    </figure>
  );
}

export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeading({ label, title, children, to, action }) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{label}</Eyebrow>
        <h2>{title}</h2>
      </div>
      <div className="heading-aside">
        {children && <p>{children}</p>}
        {to && <TextLink to={to}>{action}</TextLink>}
      </div>
    </div>
  );
}

export function Brand({ inverse = false }) {
  return (
    <Link
      to="/"
      className={"brand" + (inverse ? " inverse" : "")}
      aria-label="The Royal Purnama — home"
    >
      <img src={image(9)} width="170" height="85" alt="The Royal Purnama" />
    </Link>
  );
}

export function Hero({
  title,
  label,
  description,
  photo = 248,
  home = false,
  open,
}) {
  return (
    <section
      className={"hero" + (home ? " hero-home" : "")}
      aria-labelledby="page-title"
    >
      <Photo
        id={photo}
        alt={
          home
            ? "The Royal Purnama pool, standing stones, and tropical gardens beside the ocean"
            : label + " at The Royal Purnama"
        }
        eager
        className="hero-photo"
      />
      <div className="hero-shade"></div>
      <div className="hero-content">
        <Eyebrow>{label}</Eyebrow>
        <h1 id="page-title">{title}</h1>
        {description && <p className="hero-description">{description}</p>}
        {home && (
          <div className="hero-actions">
            <Link className="button light" to="/villas">
              Find your private escape
              <Arrow />
            </Link>
            <button
              className="film-button"
              onClick={() => open({ kind: "film" })}
            >
              <span className="play-icon" aria-hidden="true">
                ▷
              </span>
              Watch the resort film
            </button>
          </div>
        )}
      </div>
      <div className="hero-foot">
        <span>Purnama Beach · Bali</span>
        <span>
          {home ? "An adults-only beachfront retreat" : "The Royal Purnama"}
        </span>
        <button
          className="discover-button"
          aria-label="Discover the next section"
          onClick={(event) => {
            const section = event.currentTarget.closest("section");
            section.nextElementSibling?.scrollIntoView({
              behavior:
                capture ||
                matchMedia("(prefers-reduced-motion: reduce)").matches
                  ? "instant"
                  : "smooth",
              block: "start",
            });
          }}
        >
          Discover below <span aria-hidden="true">↓</span>
        </button>
      </div>
    </section>
  );
}

export function Specs({ villa }) {
  return (
    <dl className="specs">
      <div>
        <dt>Space</dt>
        <dd>{villa.size.toLocaleString("en")} m²</dd>
      </div>
      <div>
        <dt>Guests</dt>
        <dd>{villa.adults} adults</dd>
      </div>
      <div>
        <dt>Retreat</dt>
        <dd>{villa.water}</dd>
      </div>
    </dl>
  );
}

export function OfferCard({ offer: o, open }) {
  return (
    <article className="offer-card">
      <Photo id={o.image} alt={o.original + " at The Royal Purnama"} />
      <Eyebrow>{o.label}</Eyebrow>
      <h3>{o.name}</h3>
      <p>{o.description}</p>
      <button
        className="text-link"
        aria-label={"Explore this escape: " + o.original}
        onClick={() => open({ kind: "offer", offer: o })}
      >
        Explore this escape
        <Arrow />
      </button>
    </article>
  );
}

export function PageIntro({ label, title, children }) {
  return (
    <section className="section page-intro">
      <Eyebrow>{label}</Eyebrow>
      <h2>{title}</h2>
      <div className="lead">{children}</div>
    </section>
  );
}

export function PhotoRail({ children, label }) {
  const rail = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  useEffect(() => {
    const element = rail.current;
    const update = () =>
      setEdges({
        start: element.scrollLeft < 4,
        end:
          element.scrollLeft + element.clientWidth >= element.scrollWidth - 4,
      });
    const resize = new ResizeObserver(update);
    resize.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      resize.disconnect();
      element.removeEventListener("scroll", update);
    };
  }, []);
  const move = (direction) => {
    const element = rail.current;
    const first = element.firstElementChild;
    element.scrollBy({
      left:
        direction *
        (first.getBoundingClientRect().width +
          parseFloat(getComputedStyle(element).columnGap)),
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  return (
    <div className="photo-rail">
      <div className="rail-controls" aria-label={label + " controls"}>
        <span>Explore at your pace</span>
        <button
          aria-label={"Previous " + label}
          disabled={edges.start}
          onClick={() => move(-1)}
        >
          ←
        </button>
        <button
          aria-label={"Next " + label}
          disabled={edges.end}
          onClick={() => move(1)}
        >
          →
        </button>
      </div>
      <div
        ref={rail}
        className="rail-track"
        role="region"
        aria-label={label}
        tabIndex="0"
      >
        {children}
      </div>
    </div>
  );
}
