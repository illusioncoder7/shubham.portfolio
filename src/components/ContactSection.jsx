import WindowCard from "./WindowCard";
import SocialIcons from "./SocialIcons";

export default function ContactSection({ profile, revealed }) {
  return (
    <section
      id="contact"
      className={`v4-section scroll-reveal ${revealed.contact ? "in-view" : ""}`}
    >
      <h5 className="v4-section-subtitle text-base text-neon font-serif m-0 mb-2">
        What&apos;s next?
      </h5>
      <h2 className="v4-section-title text-[clamp(2rem,4vw,2.5rem)] text-foreground m-0 mb-12 font-semibold font-serif">
        Get In Touch
      </h2>

      <WindowCard className="v4-contact-card max-w-[1200px] mx-auto bg-card-soft border border-card-border rounded-xl shadow-card backdrop-blur-md">
        <div className="p-8 text-justify">
          <p className="max-w-[540px] mx-auto mb-8 text-center text-light text-[1.1rem] leading-relaxed">
            Open to protocol work, audits, and long-term projects. Say hi.
          </p>

          <div className="flex justify-center gap-5 mb-8">
            <a
              href={`mailto:${profile.email}`}
              className="py-3 px-6 text-sm font-serif rounded bg-primary text-white border-none no-underline cursor-pointer transition-all duration-250 hover:bg-accent-hover"
            >
              Say Hello
            </a>
            <a
              href={profile.whatsapp}
              className="py-3 px-6 text-sm font-serif rounded bg-transparent text-neon border border-neon no-underline cursor-pointer transition-all duration-250 hover:bg-primary-dim"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-0">
            <SocialIcons profile={profile} />
          </div>
        </div>
      </WindowCard>
    </section>
  );
}
