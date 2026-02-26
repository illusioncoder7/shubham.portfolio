// Blockchain-style nodes and links in the left/right gutters (pure SVG + CSS)
export default function BlockchainSideDecor() {
  return (
    <>
      <div className="v4-side-decor v4-side-decor--left" aria-hidden="true">
        <svg viewBox="0 0 120 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sideNodeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ee7de" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#41ccc0" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="sideLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#41ccc0" stopOpacity="0" />
              <stop offset="50%" stopColor="#41ccc0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#41ccc0" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="80" y1="40" x2="40" y2="120" className="v4-side-line" stroke="url(#sideLineGrad)" />
          <line x1="40" y1="120" x2="80" y2="200" className="v4-side-line" stroke="url(#sideLineGrad)" />
          <line x1="80" y1="200" x2="40" y2="280" className="v4-side-line" stroke="url(#sideLineGrad)" />
          <line x1="40" y1="280" x2="80" y2="360" className="v4-side-line" stroke="url(#sideLineGrad)" />
          <circle cx="80" cy="40" r="6" className="v4-side-node v4-side-node--pulse" fill="url(#sideNodeGlow)" />
          <circle cx="40" cy="120" r="5" className="v4-side-node" fill="url(#sideNodeGlow)" />
          <circle cx="80" cy="200" r="6" className="v4-side-node v4-side-node--pulse" fill="url(#sideNodeGlow)" />
          <circle cx="40" cy="280" r="5" className="v4-side-node" fill="url(#sideNodeGlow)" />
          <circle cx="80" cy="360" r="6" className="v4-side-node" fill="url(#sideNodeGlow)" />
          <rect x="60" y="185" width="40" height="20" rx="3" className="v4-side-block" fill="rgba(65,204,192,0.2)" stroke="rgba(65,204,192,0.5)" />
        </svg>
      </div>
      <div className="v4-side-decor v4-side-decor--right" aria-hidden="true">
        <svg viewBox="0 0 120 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sideNodeGlowR" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6ee7de" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#41ccc0" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="sideLineGradR" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#41ccc0" stopOpacity="0" />
              <stop offset="50%" stopColor="#41ccc0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#41ccc0" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="40" y1="60" x2="80" y2="140" className="v4-side-line" stroke="url(#sideLineGradR)" />
          <line x1="80" y1="140" x2="40" y2="220" className="v4-side-line" stroke="url(#sideLineGradR)" />
          <line x1="40" y1="220" x2="80" y2="300" className="v4-side-line" stroke="url(#sideLineGradR)" />
          <line x1="80" y1="300" x2="40" y2="380" className="v4-side-line" stroke="url(#sideLineGradR)" />
          <circle cx="40" cy="60" r="6" className="v4-side-node" fill="url(#sideNodeGlowR)" />
          <circle cx="80" cy="140" r="5" className="v4-side-node v4-side-node--pulse" fill="url(#sideNodeGlowR)" />
          <circle cx="40" cy="220" r="6" className="v4-side-node" fill="url(#sideNodeGlowR)" />
          <circle cx="80" cy="300" r="5" className="v4-side-node v4-side-node--pulse" fill="url(#sideNodeGlowR)" />
          <circle cx="40" cy="380" r="6" className="v4-side-node" fill="url(#sideNodeGlowR)" />
          <rect x="20" y="205" width="40" height="20" rx="3" className="v4-side-block" fill="rgba(65,204,192,0.2)" stroke="rgba(65,204,192,0.5)" />
        </svg>
      </div>
    </>
  )
}
