const highlights = [
  "Parent-led classes that invite families to contribute their experience and interests",
  "Age-aware programming with room for mixed-age learning and mentorship",
  "Seasonal field trips, presentations, celebrations, and community service opportunities",
  "Simple communication practices that help families plan well and stay informed",
];

export const metadata = {
  title: "About | Bridge Homeschool Co-op",
  description:
    "Learn about Bridge Homeschool Co-op, a parent-led community for homeschooling families.",
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="section-kicker">About us</p>
        <h1>Families teaching, serving, and learning side by side.</h1>
        <p>
          Bridge Homeschool Co-op exists to support families who want the
          flexibility of home education alongside the encouragement, friendship,
          and shared resources of a consistent community.
        </p>
      </section>

      <section className="content-grid">
        <div>
          <h2>How the co-op works</h2>
          <p>
            Our families gather regularly for classes, activities, and community
            events. Parents take an active role in the life of the co-op, from
            classroom support and event planning to teaching, mentoring, and
            welcoming new families.
          </p>
          <p>
            The goal is not to replace the homeschool, but to strengthen it.
            Bridge gives families a dependable place to connect, collaborate,
            and discover learning opportunities that are richer together.
          </p>
        </div>
        <div className="list-panel">
          {highlights.map((highlight) => (
            <p key={highlight}>{highlight}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
