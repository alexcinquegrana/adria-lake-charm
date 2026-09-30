import { useEffect, useState } from "react";

/**
 * Selettore temporaneo per provare i caratteri dei titoli.
 * Da rimuovere una volta scelto il font definitivo.
 */
const options = [
  { id: "fraunces", label: "Attuale" },
  { id: "playfair", label: "Playfair" },
  { id: "cormorant", label: "Cormorant" },
  { id: "marcellus", label: "Marcellus" },
] as const;

export function FontSwitcher() {
  const [font, setFont] = useState<string>("fraunces");

  useEffect(() => {
    const saved = window.localStorage.getItem("adria-font") ?? "fraunces";
    setFont(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-font", font);
    window.localStorage.setItem("adria-font", font);
  }, [font]);

  return (
    <div className="fixed bottom-24 right-3 z-50 rounded-full border border-primary/40 bg-background/90 px-2 py-1.5 backdrop-blur-md">
      <div className="flex items-center gap-1">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => setFont(o.id)}
            className={`rounded-full px-2.5 py-1 text-[0.65rem] uppercase tracking-widest transition-colors ${
              font === o.id
                ? "bg-primary text-primary-foreground"
                : "text-foreground/70 hover:text-primary"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
