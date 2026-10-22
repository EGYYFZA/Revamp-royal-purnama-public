import { useState } from "react";
import { contact, enquiryDraft } from "../content.js";
import { Hero, Eyebrow, Arrow, TextLink } from "../components/ui.jsx";
import { FAQ } from "../components/Site.jsx";

export function Contact() {
  const [draft, setDraft] = useState(null),
    [errors, setErrors] = useState({});
  function submit(e) {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.message.trim())
      next.message = "Please tell us a little about your plans.";
    setErrors(next);
    setDraft(null);
    if (Object.keys(next).length) {
      requestAnimationFrame(() =>
        document.getElementById("contact-" + Object.keys(next)[0])?.focus(),
      );
      return;
    }
    setDraft(enquiryDraft(values));
    requestAnimationFrame(() =>
      document.getElementById("draft-title")?.focus(),
    );
  }
  return (
    <>
      <Hero
        title="Your escape starts here."
        label="Get in touch"
        photo={321}
        description="A question, a celebration, a stay to remember. We would love to hear from you."
      />
      <section className="section contact-section">
        <div className="contact-details">
          <Eyebrow>The Royal Purnama</Eyebrow>
          <h2>
            Let’s make it
            <br />
            personal.
          </h2>
          <p>
            Tell us what you have in mind. Our reservations team can help with
            your stay, dining, spa visits, and special occasions.
          </p>
          <dl>
            <div>
              <dt>Reservations</dt>
              <dd>
                <a href={"mailto:" + contact.email}>{contact.email}</a>
              </dd>
            </div>
            <div>
              <dt>Call us</dt>
              <dd>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
                  {contact.whatsapp}
                  <Arrow diagonal />
                </a>
              </dd>
            </div>
            <div>
              <dt>Find us</dt>
              <dd>
                {contact.address}
                <br />
                <a
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                  href={contact.map}
                >
                  Open Google Maps
                  <Arrow diagonal />
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <form noValidate onSubmit={submit} className="contact-form">
          <Eyebrow>A note to our team</Eyebrow>
          <h3>Tell us about your plans.</h3>
          <p className="fine-print">
            This form prepares an email draft. Nothing is sent or saved here;
            you review and send it in your email app.
          </p>
          <label htmlFor="contact-name">
            Your name <span>(required)</span>
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            maxLength="120"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "error-name" : undefined}
          />
          {errors.name && (
            <p className="field-error" id="error-name">
              {errors.name}
            </p>
          )}
          <label htmlFor="contact-email">
            Email address <span>(required)</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength="200"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "error-email" : undefined}
          />
          {errors.email && (
            <p className="field-error" id="error-email">
              {errors.email}
            </p>
          )}
          <label htmlFor="contact-interest">I’m interested in</label>
          <select id="contact-interest" name="interest">
            <option>A villa stay</option>
            <option>Dining & lounge</option>
            <option>Spa & wellness</option>
            <option>A wedding or celebration</option>
            <option>Something else</option>
          </select>
          <label htmlFor="contact-message">
            Your message <span>(required)</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            required
            maxLength="1500"
            aria-invalid={!!errors.message}
            aria-describedby={
              "message-help" + (errors.message ? " error-message" : "")
            }
          />
          <p className="fine-print" id="message-help">
            Share preferred dates, number of guests, and any questions. Please
            do not include payment information.
          </p>
          {errors.message && (
            <p className="field-error" id="error-message">
              {errors.message}
            </p>
          )}
          <button className="button" type="submit">
            Prepare email draft
            <Arrow />
          </button>
          {Object.keys(errors).length > 0 && (
            <p role="alert" className="field-error">
              Please check the highlighted fields.
            </p>
          )}
          {draft && (
            <section className="draft-preview" role="status">
              <h3 id="draft-title" tabIndex="-1">
                Your draft is ready.
              </h3>
              <p>
                It has not been sent. Review the text, then open your email app
                to send it.
              </p>
              <strong>{draft.subject}</strong>
              <pre>{draft.body}</pre>
              <a href={draft.url} className="button">
                Open email app
                <Arrow diagonal />
              </a>
              <p className="fine-print">
                No email app? Copy the text above and email {contact.email}, or
                use WhatsApp.
              </p>
            </section>
          )}
        </form>
      </section>
      <FAQ />
    </>
  );
}
