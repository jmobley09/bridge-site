export const metadata = {
  title: "SMS Consent Form | Bridge Homeschool Co-op",
  description:
    "View and download the Bridge Homeschool Co-op SMS consent form for A2P messaging enrollment.",
};

const pdfPath = "/documents/a2p-communication-enrollment.pdf";
const docxPath = "/documents/a2p-communication-enrollment.docx";

export default function SmsConsentPage() {
  return (
    <main className="page-shell">
      <section className="page-hero document-hero">
        <p className="section-kicker">SMS consent</p>
        <h1>A2P Communication Enrollment Form</h1>
        <p>
          This page hosts the co-op&apos;s paper SMS consent form for review and
          download as part of the messaging application process.
        </p>
        <div className="document-actions">
          <a className="button-primary" href={pdfPath} download>
            Download PDF
          </a>
          <a className="button-secondary" href={docxPath} download>
            Download Word document
          </a>
        </div>
      </section>

      <section className="document-viewer" aria-label="SMS consent form preview">
        <object data={pdfPath} type="application/pdf">
          <p>
            The form preview could not be displayed in this browser.{" "}
            <a href={pdfPath}>Open the PDF directly</a>.
          </p>
        </object>
      </section>
    </main>
  );
}
