const boardMembers = [
  {
    role: "President",
    name: "Rebecca Mobley",
    focus: "Co-op vision, member experience, and annual planning",
  },
  {
    role: "Secretary",
    name: "Aimee Jackson",
    focus: "Meeting notes, records, schedules, and member communication",
  },
  {
    role: "Treasurer",
    name: "Jaime Prince",
    focus: "Budgeting, fees, reimbursements, and financial stewardship",
  }
];

export const metadata = {
  title: "Board | Bridge Homeschool Co-op",
  description:
    "Meet the board structure and leadership responsibilities for Bridge Homeschool Co-op.",
};

export default function BoardPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <p className="section-kicker">Board</p>
        <h1>Leadership that keeps the co-op clear, steady, and accountable.</h1>
        <p>
          Bridge is guided by a board that serves the member families, protects
          the co-op mission, and helps daily operations stay organized.
        </p>
      </section>

      <section className="board-grid">
        {boardMembers.map((member) => (
          <article className="person-card" key={member.role}>
            <div className="avatar" aria-hidden="true">
              {member.role
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </div>
            <p className="person-role">{member.role}</p>
            <h2>{member.name}</h2>
            <p>{member.focus}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
