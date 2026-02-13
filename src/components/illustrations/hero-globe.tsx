// ============================================
// Hero Globe Illustration — Decorative SVG
// Animated globe with orbit rings & floating dots
// Used in the home page hero section (desktop only)
// ============================================

export function HeroGlobe({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer glow */}
        <defs>
          <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="globe-fill" x1="140" y1="120" x2="260" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="1" stopColor="#1d4ed8" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="ring-grad" x1="100" y1="200" x2="300" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="0.5" stopColor="#60a5fa" stopOpacity="0.15" />
            <stop offset="1" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Background glow */}
        <circle cx="200" cy="200" r="180" fill="url(#globe-glow)" />

        {/* Globe body */}
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="url(#globe-fill)"
          stroke="#3b82f6"
          strokeOpacity="0.2"
          strokeWidth="1.5"
        />

        {/* Latitude lines */}
        <ellipse cx="200" cy="200" rx="100" ry="35" stroke="#3b82f6" strokeOpacity="0.12" strokeWidth="1" fill="none" />
        <ellipse cx="200" cy="170" rx="92" ry="25" stroke="#3b82f6" strokeOpacity="0.08" strokeWidth="1" fill="none" />
        <ellipse cx="200" cy="230" rx="92" ry="25" stroke="#3b82f6" strokeOpacity="0.08" strokeWidth="1" fill="none" />

        {/* Longitude lines */}
        <ellipse cx="200" cy="200" rx="35" ry="100" stroke="#3b82f6" strokeOpacity="0.12" strokeWidth="1" fill="none" />
        <ellipse cx="200" cy="200" rx="70" ry="100" stroke="#3b82f6" strokeOpacity="0.08" strokeWidth="1" fill="none" />

        {/* Orbit ring 1 */}
        <ellipse
          cx="200"
          cy="200"
          rx="150"
          ry="55"
          stroke="url(#ring-grad)"
          strokeWidth="1"
          strokeDasharray="6 4"
          fill="none"
          transform="rotate(-20, 200, 200)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="-20 200 200"
            to="340 200 200"
            dur="60s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Orbit ring 2 */}
        <ellipse
          cx="200"
          cy="200"
          rx="170"
          ry="42"
          stroke="#60a5fa"
          strokeOpacity="0.12"
          strokeWidth="0.75"
          strokeDasharray="4 6"
          fill="none"
          transform="rotate(15, 200, 200)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="15 200 200"
            to="-345 200 200"
            dur="80s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Floating country dots on globe */}
        <circle cx="175" cy="165" r="3" fill="#3b82f6" fillOpacity="0.5">
          <animate attributeName="fillOpacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="225" cy="185" r="2.5" fill="#2563eb" fillOpacity="0.4">
          <animate attributeName="fillOpacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="210" cy="220" r="3" fill="#3b82f6" fillOpacity="0.45">
          <animate attributeName="fillOpacity" values="0.45;0.85;0.45" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="185" cy="210" r="2" fill="#60a5fa" fillOpacity="0.35">
          <animate attributeName="fillOpacity" values="0.35;0.75;0.35" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="230" cy="160" r="2" fill="#2563eb" fillOpacity="0.3">
          <animate attributeName="fillOpacity" values="0.3;0.7;0.3" dur="4.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="165" cy="195" r="2.5" fill="#3b82f6" fillOpacity="0.4">
          <animate attributeName="fillOpacity" values="0.4;0.8;0.4" dur="3.8s" repeatCount="indefinite" />
        </circle>

        {/* Orbiting satellite dots */}
        <circle r="4" fill="#3b82f6" fillOpacity="0.7">
          <animateMotion
            dur="60s"
            repeatCount="indefinite"
            path="M350,200 A150,55 -20 1 1 50,200 A150,55 -20 1 1 350,200"
          />
          <animate attributeName="fillOpacity" values="0.7;0.3;0.7" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="#60a5fa" fillOpacity="0.5">
          <animateMotion
            dur="80s"
            repeatCount="indefinite"
            path="M370,200 A170,42 15 1 0 30,200 A170,42 15 1 0 370,200"
          />
          <animate attributeName="fillOpacity" values="0.5;0.2;0.5" dur="10s" repeatCount="indefinite" />
        </circle>

        {/* Calendar icon in center of globe */}
        <g transform="translate(182, 182)" opacity="0.35">
          <rect x="0" y="4" width="36" height="28" rx="4" stroke="#1d4ed8" strokeWidth="1.5" fill="none" />
          <line x1="0" y1="12" x2="36" y2="12" stroke="#1d4ed8" strokeWidth="1.5" />
          <line x1="10" y1="0" x2="10" y2="8" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="26" y1="0" x2="26" y2="8" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round" />
          {/* Check mark */}
          <polyline points="11,20 16,25 26,17" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}
