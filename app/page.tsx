import Image from "next/image";

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
      <section className="relative overflow-hidden bg-[var(--cream)]">
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
              Homeschooling in community
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.98] text-[var(--ink)] sm:text-6xl lg:text-7xl">
              Bridge Homeschool Co-op
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              A welcoming parent-led community where homeschool families learn
              together, share their strengths, and build steady rhythms of
              connection for students of all ages.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="button-primary" href="/contact">
                Contact us
              </a>
              <a className="button-secondary" href="/about">
                Learn about the co-op
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-2xl shadow-black/15">
              <Image
                alt="Books, art supplies, science materials, and plants on a learning table"
                className="aspect-[4/3] h-full w-full object-cover"
                height={900}
                priority
                src="/og.png"
                width={1200}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:py-20">
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
