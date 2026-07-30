export const metadata = {
  title: "Terms and Conditions | Bridge Homeschool Co-op",
  description:
    "Terms and Conditions for Bridge Homeschool Co-op, including SMS update terms.",
};

export default function TermsPage() {
  return (
    <main className="legal-shell">
      <p className="section-kicker">Terms and Conditions</p>
      <h1>Bridge Homeschool Co-op Terms and Conditions</h1>
      <p className="legal-date">Effective July 30, 2026</p>

      <h2>Use of this site</h2>
      <p>
        This website provides general information about Bridge Homeschool Co-op.
        Site content may change as programs, schedules, board roles, and member
        processes are updated.
      </p>

      <h2>Membership and participation</h2>
      <p>
        Participation in co-op activities may be subject to membership approval,
        family agreements, volunteer expectations, facility rules, payment
        requirements, and event-specific guidelines.
      </p>

      <h2>SMS update terms</h2>
      <p>
        By opting in to text updates from Bridge Homeschool Co-op, you agree to
        receive recurring informational SMS messages related to co-op reminders,
        schedule changes, events, volunteer needs, and urgent announcements.
        Message frequency varies. Message and data rates may apply.
      </p>
      <p>
        You can cancel SMS messages at any time by replying STOP. After you send
        STOP, we may send one confirmation message. Reply HELP for help, or
        contact us at{" "}
        <a href="mailto:info@bridgehsc.com">
          info@bridgehsc.com
        </a>
        . Consent to receive SMS messages is not a condition of membership or
        purchase.
      </p>

      <h2>No warranties</h2>
      <p>
        The site is provided for informational purposes. We make reasonable
        efforts to keep information accurate, but we do not guarantee that all
        content is complete, current, or error-free.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms may be sent to{" "}
        <a href="mailto:info@bridgehsc.com">
          info@bridgehsc.com
        </a>
        .
      </p>
    </main>
  );
}
