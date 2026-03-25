export default function WindowCard({ children, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex items-center px-4 pt-3 pb-2.5 bg-black/[0.06] border-b border-card-border shrink-0"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2">
          <span className="v4-window-btn w-3 h-3 rounded-full bg-win-close shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]" />
          <span className="v4-window-btn w-3 h-3 rounded-full bg-win-min shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]" />
          <span className="v4-window-btn w-3 h-3 rounded-full bg-win-max shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]" />
        </div>
      </div>
      {children}
    </div>
  );
}
