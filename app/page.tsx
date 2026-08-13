const programs = [
  "Weekly co-op classes and parent-led learning labs",
  "Field trips, nature study days, and service projects",
  "Family gatherings that help students build lasting friendships",
];

const values = [
  {
    title: "Parent Partnership",
    body: "Families participate, serve, and shape the learning environment together.",
  },
  {
    title: "Whole-Child Learning",
    body: "Academic growth, character formation, creativity, and practical life skills all matter here.",
  },
  {
    title: "Clear Communication",
    body: "Members can opt in to text updates for schedule changes, reminders, and timely announcements.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero-section relative overflow-hidden bg-[var(--cream)]">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-12 text-center sm:px-8 lg:py-16">
          <h1 className="sr-only">Bridge Homeschool Community</h1>
          <div className="w-full max-w-3xl">
            <div className="logo-showcase">
              <span className="logo-spark logo-spark-one" aria-hidden="true" />
              <span className="logo-spark logo-spark-two" aria-hidden="true" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Bridge Homeschool Community"
                className="aspect-[4/3] h-full w-full rounded-[1.4rem] object-cover"
                src="/bridge_logo.jpg"
              />
            </div>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              A welcoming parent-led co-op where homeschool families learn
              together, share their strengths, and build steady rhythms of
              connection for students of all ages.
            </p>
          </div>
        </div>
        <a className="scroll-cue" href="#what-we-do" aria-label="Scroll to what we do">
          <span>Explore what we do</span>
          <span className="scroll-cue-mark" aria-hidden="true">
            ↓
          </span>
        </a>
      </section>

      <section id="what-we-do" className="bg-white px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">What we do</p>
            <h2 className="section-title">Shared learning, shared support.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {programs.map((program) => (
              <div className="feature-card" key={program}>
                <span className="feature-mark" aria-hidden="true" />
                <p>{program}</p>
              </div>
            ))}
          </div>
          <div className="homepage-actions">
            <a className="button-primary" href="/contact">
              Contact us
            </a>
            <a className="button-secondary" href="/about">
              Learn about the co-op
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--sage)] px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker">Our foundation</p>
            <h2 className="section-title">
              A practical, relational approach to homeschooling.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article className="info-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
