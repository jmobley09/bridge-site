export const metadata = {
  title: "Enrollment Form | Bridge Homeschool Co-op",
  description:
    "View and download the Bridge Homeschool enrollment forms",
};

const pdfPath = "/documents/Enrollment-Forms-2026.pdf";

export default function EnrollPage() {
  return (
    <main className="page-shell">
      <section className="page-hero document-hero">
        <h1>Enrollment Form</h1>
        <p>
          This page hosts the co-op&apos;s paper enrollment form for review and
          download. Once filled out, please bring the completed forms to the next in-person event or mail them in via standard mail.
        </p>
        <div className="document-actions">
          <a className="button-primary" href={pdfPath} download>
            Download PDF
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
