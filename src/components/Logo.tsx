import logoAsset from "@/assets/adria-logo.png.asset.json";

/**
 * Marchio storico "with love ADRIA" ripreso dalla parete della trattoria.
 * L'immagine è usata come maschera: il colore segue sempre currentColor,
 * così il logo resta coerente con la palette (oro / avorio su rosso).
 */
export function Logo({
  className = "",
  variant = "compact",
}: {
  className?: string;
  variant?: "compact" | "full";
}) {
  const maskStyle = {
    maskImage: `url(${logoAsset.url})`,
    WebkitMaskImage: `url(${logoAsset.url})`,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
    maskSize: "contain",
    WebkitMaskSize: "contain",
  } as const;

  return (
    <span
      role="img"
      aria-label="Trattoria Adria da Kevin"
      className={`inline-block bg-current ${variant === "full" ? "aspect-5/4" : "aspect-5/4"} ${className}`}
      style={maskStyle}
    />
  );
}
