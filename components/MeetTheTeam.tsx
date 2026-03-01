"use client";

import Image from "next/image";

const team = [
  {
    name: "Charles Snider",
    role: "Founder",
    location: "Houston, Texas",
    bio: "Father of 3 beautiful girls and a proud Baylor University graduate with a passion for all things digital. When he's not building growth systems for clients, you'll likely find him enjoying the open road on his motorcycle.",
    accent: "#FF2D78",
    gradientFrom: "#FF2D78",
    gradientTo: "#9B30FF",
    photo: "/images/team/charles.webp",
  },
  {
    name: "Chris Kim",
    role: "CIO",
    location: "Houston, Texas",
    bio: "A cyber security expert with serious IT depth, Chris is the sharpest technical mind on the team. His credentials are impeccable — though we're still holding a grudge about the time he talked us out of buying Bitcoin at $300. The jury's still out on his investment advice.",
    accent: "#00E5FF",
    gradientFrom: "#00E5FF",
    gradientTo: "#9B30FF",
    photo: "/images/team/chris.webp",
  },
  {
    name: "Thomas Sanders",
    role: "Sales Manager",
    location: "Houston, Texas",
    bio: "Probably one of the nicest and most genuine people you'll ever meet. Thomas is a proud dad to 2 smart kiddos and a TCU Graduate. When he's not closing deals, you might find him deep in a League of Legends match.",
    accent: "#9B30FF",
    gradientFrom: "#9B30FF",
    gradientTo: "#FF2D78",
    photo: "/images/team/thomas.webp",
  },
];

/* Circuit trace lengths (approximate) so dasharray matches the path */
const TRACES = [
  { d: "M10 30 H90 V70 H160 V40 H240 V80 H310 V45 H390", delay: "0s", dur: "3s" },
  { d: "M10 128 H60 V95  H140 V135 H210 V105 H270 V148 H350 V115 H390", delay: "0.9s", dur: "4s" },
  { d: "M10 220 H75 V185 H155 V225 H235 V195 H315 V228 H390", delay: "1.8s", dur: "3.5s" },
  { d: "M90 30  V128 M240 80  V105 M310 45  V148 M160 70  V135", delay: "0.5s", dur: "2.5s" },
  { d: "M60 128 V220 M270 148 V195 M350 115 V228", delay: "1.3s", dur: "3.2s" },
];

const NODES = [
  [90, 30], [160, 40], [240, 80], [310, 45],
  [60, 128], [140, 135], [210, 105], [270, 148], [350, 115],
  [75, 220], [155, 225], [235, 195], [315, 228],
  [240, 30], [90, 128], [160, 128],
];

function CircuitBg({ color }: { color: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 400 256"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <filter id={`glow-${color.replace('#', '')}`}>
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {TRACES.map((t, i) => (
        <path
          key={i}
          d={t.d}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#glow-${color.replace('#', '')})`}
        >
          <animate
            attributeName="stroke-dasharray"
            values="0 1200; 200 1000; 0 1200"
            dur={t.dur}
            begin={t.delay}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.15; 0.55; 0.15"
            dur={t.dur}
            begin={t.delay}
            repeatCount="indefinite"
          />
        </path>
      ))}

      {NODES.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill={color}
          filter={`url(#glow-${color.replace('#', '')})`}>
          <animate
            attributeName="opacity"
            values="0.2; 0.8; 0.2"
            dur={`${2 + (i % 4) * 0.5}s`}
            begin={`${(i * 0.25) % 2}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="2.5; 4; 2.5"
            dur={`${2 + (i % 4) * 0.5}s`}
            begin={`${(i * 0.25) % 2}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}

export default function MeetTheTeam() {
  return (
    <section className="relative py-24 lg:py-32" style={{ background: '#0A0F1C' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em]"
            style={{ background: 'rgba(155,48,255,0.1)', border: '1px solid rgba(155,48,255,0.25)', color: '#9B30FF' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            The Crew Behind The Results
          </div>
          <h2 className="reveal reveal-delay-100 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Meet The{' '}
            <span style={{
              background: 'linear-gradient(90deg, #FF2D78, #9B30FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Team
            </span>
          </h2>
          <p className="reveal reveal-delay-200 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(240,244,255,0.45)' }}>
            Small team. Big output. Every client gets direct access to the people actually running their campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`reveal reveal-delay-${(i + 2) * 100} card-neon rounded-2xl overflow-hidden flex flex-col`}
              style={{ background: 'rgba(13,21,38,0.85)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}
            >
              {/* Photo area */}
              <div
                className="relative h-64 flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${member.gradientFrom}10, ${member.gradientTo}10)` }}
              >
                {/* Circuit board animation */}
                <CircuitBg color={member.accent} />

                {/* Soft radial glow behind photo */}
                <div className="absolute inset-0 z-10 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${member.accent}22 0%, transparent 65%)` }} />

                {/* Circular photo */}
                <div
                  className="relative w-52 h-52 rounded-full overflow-hidden z-20"
                  style={{
                    boxShadow: `0 0 0 3px ${member.accent}70, 0 0 25px ${member.accent}60, 0 0 60px ${member.accent}30`,
                  }}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="208px"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-lg font-black text-white">{member.name}</h3>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: member.accent }}>
                    {member.role} — {member.location}
                  </p>
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(240,244,255,0.5)' }}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
