const row1 = [
  "The Oaks Plastic Surgery",
  "Radiant Med Spa",
  "Elite Dermatology",
  "Lind Institute",
  "Royal Med Spa",
  "Illuminate Heights",
  "Dance Alliance of Kingwood",
  "Spindletap Brewery",
];

const row2 = [
  "Makaan Investment Group",
  "Maka Investment",
  "Inate Rights",
  "Illuminate Heights Fitness",
  "The Oaks Plastic Surgery",
  "Radiant with Rebecca",
  "Royal Med Spa",
  "Elite Dermatology",
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul
        className={`flex shrink-0 gap-4 items-center py-2 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {items.map((name, i) => (
          <li
            key={i}
            className="shrink-0 flex items-center justify-center px-5 py-3 bg-white/5 border border-white/10 rounded-2xl whitespace-nowrap text-xs font-bold uppercase tracking-widest text-white/60 min-w-[160px] text-center"
          >
            {name}
          </li>
        ))}
      </ul>
      {/* Duplicate for seamless loop */}
      <ul
        className={`flex shrink-0 gap-4 items-center py-2 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        aria-hidden="true"
      >
        {items.map((name, i) => (
          <li
            key={i}
            className="shrink-0 flex items-center justify-center px-5 py-3 bg-white/5 border border-white/10 rounded-2xl whitespace-nowrap text-xs font-bold uppercase tracking-widest text-white/60 min-w-[160px] text-center"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LogoBanner() {
  return (
    <div className="bg-black py-10 overflow-hidden space-y-4">
      <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-6">
        Trusted By
      </p>
      <MarqueeRow items={row1} />
      <MarqueeRow items={row2} reverse />
    </div>
  );
}
