export function Logo({
  className = "",
  variant = "compact",
}: {
  className?: string;
  variant?: "compact" | "full";
}) {
  if (variant === "full") {
    return (
      <svg
        viewBox="0 0 260 120"
        className={className}
        role="img"
        aria-label="Trattoria Adria da Kevin"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="1" opacity="0.6">
          <circle cx="130" cy="52" r="46" />
          <circle cx="130" cy="52" r="41" strokeDasharray="1 5" strokeLinecap="round" />
        </g>
        <path
          d="M113 70 L130 26 L147 70 M119.5 56 h21"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="130"
          y="90"
          textAnchor="middle"
          fill="currentColor"
          fontFamily="Fraunces, Georgia, serif"
          fontSize="20"
          letterSpacing="6"
        >
          ADRIA
        </text>
        <text
          x="130"
          y="108"
          textAnchor="middle"
          fill="currentColor"
          fontFamily="Archivo, sans-serif"
          fontSize="8"
          letterSpacing="5"
          opacity="0.75"
        >
          DA KEVIN · GARDONE
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 44 44"
      className={className}
      role="img"
      aria-label="Trattoria Adria da Kevin"
      fill="none"
    >
      <circle cx="22" cy="22" r="20.5" stroke="currentColor" strokeWidth="1" opacity="0.65" />
      <circle
        cx="22"
        cy="22"
        r="17"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="1 4"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M14 30 L22 12 L30 30 M17 24 h10"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
