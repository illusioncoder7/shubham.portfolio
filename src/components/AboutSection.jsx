import WindowCard from "./WindowCard";

export default function AboutSection({ about, images, baseUrl, revealed }) {
  return (
    <section
      id="about"
      className={`v4-section scroll-reveal ${revealed.about ? "in-view" : ""}`}
    >
      <h5 className="v4-section-subtitle text-base text-neon font-serif m-0 mb-2">
        Get to know
      </h5>
      <h2 className="v4-section-title text-[clamp(2rem,4vw,2.5rem)] text-foreground m-0 mb-12 font-semibold font-serif">
        About Me
      </h2>

      <WindowCard className="v4-about-card bg-card-soft border border-card-border rounded-xl max-w-[1200px] mx-auto shadow-card backdrop-blur-md">
        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5 items-stretch min-h-[340px]">
            <div className="v4-about-image-wrap relative w-full min-h-0 h-full max-w-[220px] md:max-w-[260px] lg:max-w-[280px] rounded-xl overflow-hidden bg-card-soft shadow-[0_8px_32px_rgba(0,0,0,0.2),0_0_0_1px_var(--color-card-border)] aspect-square lg:aspect-auto -order-1 lg:order-0 mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <img
                  src={baseUrl(images.about)}
                  alt=""
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            <div className="v4-about-inner min-w-0">
              <p className="v4-about-intro text-lg text-neon font-serif m-0 mb-4 leading-normal">
                &quot;{about.intro}&quot;
              </p>

              <div className="v4-about-stats flex flex-wrap items-center gap-2 mb-6 text-sm font-serif text-muted">
                <span>{about.stats.experience}</span>
                <span className="opacity-60 select-none">·</span>
                <span>{about.stats.chains}</span>
                <span className="opacity-60 select-none">·</span>
                <span>{about.stats.focus}</span>
              </div>

              <div className="v4-about-body mb-6">
                {about.body.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-light text-base leading-[1.75] m-0 mb-4 last:mb-0"
                  >
                    {para}
                  </p>
                ))}
              </div>

              <ul className="v4-about-highlights list-none p-0 m-0 border-t border-card-border pt-5">
                {about.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="relative pl-5 mb-2 text-light text-[0.95rem] leading-normal last:mb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </WindowCard>
    </section>
  );
}
