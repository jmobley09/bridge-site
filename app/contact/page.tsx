export const metadata = {
  title: "Contact | Bridge Homeschool Co-op",
  description:
    "Contact Bridge Homeschool Co-op about membership, events, and text message updates.",
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="section-kicker">Contact</p>
        <h1>Interested in Bridge Homeschool Co-op?</h1>
        <p>
          Reach out with questions about membership, meeting rhythms, volunteer
          roles, or update messages. A board member will follow up with next
          steps.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-panel">
          <h2>Get in touch</h2>
          <dl>
            <div>
              <dt>Email</dt>
              <dd>
                <a href="mailto:hello@bridgehomeschoolcoop.org">
                  hello@bridgehomeschoolcoop.org
                </a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href="tel:+15551234567">(555) 123-4567</a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>Serving local homeschool families</dd>
            </div>
          </dl>
        </div>
        <div className="contact-panel accent">
          <h2>Text updates</h2>
          <p>
            Families who opt in may receive text messages about co-op reminders,
            schedule changes, event details, and urgent updates. Message
            frequency varies. Message and data rates may apply.
          </p>
          <p>
            Reply STOP to opt out or HELP for help. Consent to receive text
            messages is not required for membership.
          </p>
          <a className="button-primary" href="mailto:hello@bridgehomeschoolcoop.org">
            Ask about membership
          </a>
        </div>
      </section>
    </main>
  );
}
