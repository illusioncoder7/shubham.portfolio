import WindowCard from "./WindowCard";

export default function EducationSection({ education, revealed }) {
  return (
    <section
      id="education"
      className={`v4-section scroll-reveal ${revealed.education ? "in-view" : ""}`}
    >
      <h5 className="v4-section-subtitle text-base text-neon font-serif m-0 mb-2">
        Background
      </h5>
      <h2 className="v4-section-title text-[clamp(2rem,4vw,2.5rem)] text-foreground m-0 mb-12 font-semibold font-serif">
        Education
      </h2>

      <WindowCard className="v4-edu-window max-w-[1200px] mx-auto bg-card-soft border border-card-border rounded-xl shadow-card backdrop-blur-md">
        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {education.map((edu, i) => (
              <div
                key={i}
                className="v4-edu-card flex flex-col min-h-[180px] bg-white/3 border border-card-border rounded-[10px] p-5 px-6"
              >
                <article className="flex flex-col flex-1 p-0">
                  <span className="block text-xs text-neon font-serif mb-2">
                    {edu.period}
                  </span>
                  <h3 className="text-[1.05rem] m-0 mb-1 text-foreground flex-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted m-0">{edu.institution}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </WindowCard>
    </section>
  );
}
