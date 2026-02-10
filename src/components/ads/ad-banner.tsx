// ============================================
// AdSense Banner — Placeholder Component
// Replace SLOT_ID with real AdSense unit later
// ============================================

interface AdBannerProps {
  label?: string;
  slot?: string;
  format?: "horizontal" | "vertical" | "rectangle";
  className?: string;
}

function AdBanner({
  label = "Advertisement",
  slot,
  format = "horizontal",
  className = "",
}: AdBannerProps) {
  const sizeClasses = {
    horizontal: "h-24 md:h-28",
    vertical: "h-64 w-40",
    rectangle: "h-64 w-full max-w-sm",
  };

  // TODO: Replace with real AdSense script when approved
  // <ins className="adsbygoogle"
  //   style={{ display: "block" }}
  //   data-ad-client="ca-pub-XXXXXXX"
  //   data-ad-slot={slot}
  //   data-ad-format="auto"
  //   data-full-width-responsive="true" />

  return (
    <div
      className={`
        relative w-full
        ${sizeClasses[format]}
        ${className}
      `}
      role="complementary"
      aria-label={label}
    >
      {/* Visual placeholder — remove when AdSense is live */}
      <div
        className="
          w-full h-full rounded-lg border-2 border-dashed border-grey-200
          bg-grey-50 flex flex-col items-center justify-center gap-1
        "
      >
        <span className="text-[10px] font-medium text-grey-400 uppercase tracking-widest">
          {label}
        </span>
        <span className="text-xs text-grey-300">
          {slot ? `Slot: ${slot}` : "AdSense unit"}
        </span>
      </div>
    </div>
  );
}

export { AdBanner };
