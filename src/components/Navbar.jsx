const NAV_ICON_FALLBACK = {
  top: "⌂",
  about: "⌂",
  experience: "💼",
  "tech-stacks": "🛠️",
  education: "🎓",
  contact: "✉️",
};

export default function Navbar({
  sections,
  activeNav,
  handleNavClick,
  baseUrl,
}) {
  return (
    <nav className="flex w-full">
      <div className="flex-1 flex justify-start items-center min-w-0">
          <div className="v4-nav-card flex justify-center items-center w-full py-2 px-2 h-[50px] box-border bg-card-soft border border-neon-border rounded-[14px] shadow-card max-md:w-[min(100%,720px)] max-md:m-0 max-md:overflow-hidden max-md:backdrop-blur-xl max-md:bg-[rgba(30,58,95,0.75)]">
          <ul className="flex justify-evenly items-center list-none m-0 p-0 w-full gap-1 text-sm font-serif max-md:gap-0.5">
            {sections.map(({ id, label }) => (
              <li key={id} className="relative max-md:min-w-0">
                <a
                  href={`#${id}`}
                  className={`v4-nav-link inline-flex items-center justify-center gap-0.5 py-1 px-1.5 text-white/88 no-underline bg-transparent border-none outline-none rounded-lg focus:outline-none focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 max-md:py-0.5 max-md:px-0 max-md:w-3/4 ${activeNav === `#${id}` ? "active text-neon" : ""}`}
                  onClick={handleNavClick}
                  aria-label={label}
                >
                  <span className="v4-nav-tooltip" role="tooltip">
                    {label}
                  </span>
                  <span className="v4-nav-icon inline-flex items-center justify-center w-[26px] h-[26px] text-xl bg-transparent border-none max-sm:w-6 max-sm:h-6">
                    <img
                      src={baseUrl(
                        `/icons/nav-${id === "about" ? "top" : id}.svg`,
                      )}
                      alt=""
                      className="w-auto h-auto max-w-[26px] max-h-[26px] object-contain block align-middle max-sm:max-w-6 max-sm:max-h-6"
                      onError={(e) => {
                        e.target.style.display = "none";
                        const fallback = e.target.nextElementSibling;
                        if (fallback) fallback.style.display = "inline";
                      }}
                    />
                    <span
                      className="text-xl inline-flex items-center justify-center w-[26px] h-[26px] max-sm:w-6 max-sm:h-6"
                      style={{ display: "none" }}
                    >
                      {NAV_ICON_FALLBACK[id]}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
