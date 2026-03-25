import SocialIcons from "./SocialIcons";

export default function HeroSection({
  profile,
  images,
  baseUrl,
  handleNavClick,
}) {
  return (
    <header id="top" className=" overflow-hidden">
      <div className="v4-hero-card relative bg-card-soft border border-card-border rounded-xl p-0 m-0 w-full flex flex-col shadow-card backdrop-blur-md">
        <div className="flex flex-col gap-4 p-4 lg:px-6 items-center">
          <div className="v4-hero-image-wrap shrink-0 w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[340px] h-auto aspect-square mx-auto relative z-1">
            <div className="v4-hero-image-card aspect-square w-full h-full rounded-xl overflow-hidden bg-card-soft p-1 shadow-[0_8px_32px_var(--color-card-border)] box-border">
              <img
                src={baseUrl(images.hero)}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="min-w-0 relative z-1 w-full max-w-[520px]">
            <div className="v4-hero-code-block font-serif text-[clamp(0.9rem,1.4vw,1.05rem)] leading-[1.55] bg-elevated border border-border border-l-[3px] border-l-neon rounded-md pt-3.5 px-5 pb-0 w-full min-h-[140px] sm:min-h-[150px] lg:min-h-[220px] shadow-[0_1px_3px_rgba(0,0,0,0.2)]">
              <div className="v4-hero-code-line block min-h-[1.5em] whitespace-pre-wrap wrap-break-word text-[clamp(1.15em,3vw,1.65em)] font-medium -tracking-[0.01em]">
                <span className="text-neon font-normal opacity-95">&#123;</span>
                <span className="text-foreground"> {profile.name} </span>
                <span className="text-neon font-normal opacity-95">&#125;</span>
              </div>

              <div className="v4-hero-code-line block min-h-[1.5em] whitespace-pre-wrap wrap-break-word mt-1.5 text-center">
                <span className="text-neon font-normal opacity-95">&quot;</span>
                <span className="text-muted">
                  {profile.shortBio || profile.tagline}
                </span>
                <span className="text-neon font-normal opacity-95">&quot;</span>
              </div>

              <div className="v4-hero-code-line block min-h-[1.5em] whitespace-pre-wrap wrap-break-word mt-1.5 pt-2 border-t border-border">
                <a
                  href="#tech-stacks"
                  className="v4-hero-code-link text-neon no-underline font-medium"
                  onClick={handleNavClick}
                >
                  seeMySkills()
                </a>
                <span className="text-muted opacity-60 mx-2"> </span>
                <a
                  href="#experience"
                  className="v4-hero-code-link text-neon no-underline font-medium"
                  onClick={handleNavClick}
                >
                  experience()
                </a>
              </div>

              <div className="v4-hero-code-line v4-hero-socials-inner mt-4 pt-1 mb-4 flex flex-wrap items-center gap-2">
                <SocialIcons profile={profile} />
              </div>

              <div className="v4-hero-code-line v4-hero-socials-inner mt-4 pt-1 mb-4 flex flex-wrap items-center gap-2">
                <a
                  href={baseUrl("/Shubham_Resume.pdf")}
                  className="v4-nav-btn w-full inline-flex justify-center px-3 py-1.5 text-xs font-serif font-medium text-neon bg-card-soft border border-card-border rounded-lg no-underline shadow-card backdrop-blur-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
