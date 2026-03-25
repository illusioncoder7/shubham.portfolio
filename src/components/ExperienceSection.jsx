import WindowCard from "./WindowCard";

export default function ExperienceSection({ experience, revealed }) {
  return (
    <section
      id="experience"
      className={`v4-section scroll-reveal ${revealed.experience ? "in-view" : ""}`}
    >
      <h5 className="v4-section-subtitle text-base text-neon font-serif m-0 mb-2">
        What I&apos;ve done
      </h5>
      <h2 className="v4-section-title text-[clamp(2rem,4vw,2.5rem)] text-foreground m-0 mb-12 font-semibold font-serif">
        Experience
      </h2>

      <div className="grid grid-cols-1 gap-6 max-w-[1200px] mx-auto">
        {experience.map((job, i) => (
          <WindowCard
            key={i}
            className="v4-exp-card bg-card-soft border border-card-border rounded-lg w-full"
          >
            <div className="p-6">
              <span className="block text-xs text-neon font-serif mb-2">
                {job.period || "—"}
              </span>
              <h3 className="text-[1.1rem] m-0 mb-1 text-foreground">
                {job.role}
              </h3>
              <p className="text-sm text-muted m-0 mb-3">{job.company}</p>
              <ul className="m-0 pl-5 text-light text-sm leading-relaxed">
                {job.points.map((point, j) => (
                  <li key={j} className="mb-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </WindowCard>
        ))}
      </div>
    </section>
  );
}
