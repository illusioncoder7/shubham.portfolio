import WindowCard from "./WindowCard";

export default function SkillsSection({ techStacks, baseUrl, revealed }) {
  const n = techStacks.length;
  const row1 = techStacks.slice(0, Math.ceil(n / 3));
  const row2 = techStacks.slice(Math.ceil(n / 3), Math.ceil((2 * n) / 3));
  const row3 = techStacks.slice(Math.ceil((2 * n) / 3), n);

  const renderRow = (items, rowClass) => (
    <div className={`v4-stacks-row ${rowClass} overflow-hidden w-full`}>
      <div className="v4-stacks-row-inner flex flex-nowrap gap-3 w-max py-2">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="v4-stack-pill shrink-0 inline-flex items-center gap-2 py-2 px-4 text-sm font-serif text-neon border border-transparent rounded-lg relative overflow-hidden cursor-default"
          >
            <img
              src={baseUrl(item.icon)}
              alt=""
              className="v4-stack-icon w-6 h-6 object-contain shrink-0 relative z-1"
            />
            <span className="relative z-1">{item.name}</span>
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="tech-stacks"
      className={`v4-section scroll-reveal ${revealed["tech-stacks"] ? "in-view" : ""}`}
    >
      <h5 className="v4-section-subtitle text-base text-neon font-serif m-0 mb-2">
        Tools &amp; platforms
      </h5>
      <h2 className="v4-section-title text-[clamp(2rem,4vw,2.5rem)] text-foreground m-0 mb-12 font-semibold font-serif">
        My Skills
      </h2>

      <WindowCard className="v4-skills-card max-w-[1200px] mx-auto bg-card-soft border border-card-border rounded-xl shadow-card backdrop-blur-md">
        <div className="py-4 pb-6 overflow-hidden">
          <div className="flex flex-col gap-5 overflow-hidden w-full">
            {renderRow(row1, "v4-stacks-row-1")}
            {renderRow(row2, "v4-stacks-row-2")}
            {renderRow(row3, "v4-stacks-row-3")}
          </div>
        </div>
      </WindowCard>
    </section>
  );
}
