import { Eyebrow, TextLink, Link, Arrow } from "../components/ui.jsx";

export function Privacy() {
  return (
    <section className="section privacy-page">
      <Eyebrow>Your privacy</Eyebrow>
      <h1>A little clarity about your data.</h1>
      <p>
        This portfolio preview does not use analytics, accounts,
        or a contact database. Images, video, and linked documents are served by the hotel or its CDN; those services receive normal browser requests.
      </p>
      <h2>Getting in touch</h2>
      <p>
        The contact form prepares a draft in your browser. It does not send or
        store your message. When you open your email app or WhatsApp, you choose
        whether to send your enquiry using that service.
      </p>
      <h2>Booking your stay</h2>
      <p>
        Reservations are handled by the official booking website. Please review
        its privacy and booking terms before sharing personal or payment
        information.
      </p>
      <TextLink to="/contact">Contact the resort</TextLink>
    </section>
  );
}

export function NotFound() {
  return (
    <section className="section not-found">
      <Eyebrow>A different path</Eyebrow>
      <h1>Let’s find your way back.</h1>
      <p>
        This page is not part of the local preview. Explore the resort or
        contact our team.
      </p>
      <Link to="/" className="button">
        Return home
        <Arrow />
      </Link>
    </section>
  );
}
