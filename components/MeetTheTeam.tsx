"use client";

const team = [
  {
    name: "Charles Snider",
    role: "Founder",
    location: "Houston, Texas",
    bio: "Father of 3 beautiful girls and a proud Baylor University graduate with a passion for all things digital. When he's not building growth systems for clients, you'll likely find him enjoying the open road on his motorcycle.",
    accent: "#FF2D78",
    initials: "CS",
    gradientFrom: "#FF2D78",
    gradientTo: "#9B30FF",
  },
  {
    name: "Chris Kim",
    role: "CIO",
    location: "Houston, Texas",
    bio: "A cyber security expert with serious IT depth, Chris is the sharpest technical mind on the team. His credentials are impeccable — though we're still holding a grudge about the time he talked us out of buying Bitcoin at $300. The jury's still out on his investment advice.",
    accent: "#00E5FF",
    initials: "CK",
    gradientFrom: "#00E5FF",
    gradientTo: "#9B30FF",
  },
  {
    name: "Thomas Sanders",
    role: "Sales Manager",
    location: "Houston, Texas",
    bio: "Probably one of the nicest and most genuine people you'll ever meet. Thomas is a proud dad to 2 smart kiddos and a TCU Graduate. When he's not closing deals, you might find him deep in a League of Legends match.",
    accent: "#9B30FF",
    initials: "TS",
    gradientFrom: "#9B30FF",
    gradientTo: "#FF2D78",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="relative py-24 lg:py-32" style={{ background: '#0A0F1C' }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`reveal reveal-delay-${(i + 2) * 100} card-neon rounded-2xl overflow-hidden flex flex-col`}
              style={{ background: 'rgba(13,21,38,0.85)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}
            >
              {/* Photo placeholder */}
              <div className="relative h-64 flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${member.gradientFrom}18, ${member.gradientTo}18)` }}>
                {/* Avatar circle */}
                <div className="w-28 h-28 rounded-full flex items-center justify-center text-3xl font-black text-white"
                  style={{
                    background: `linear-gradient(135deg, ${member.gradientFrom}, ${member.gradientTo})`,
                    boxShadow: `0 0 40px ${member.accent}40`,
                  }}>
                  {member.initials}
                </div>
                {/* Ambient glow */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 60%, ${member.accent}15 0%, transparent 65%)` }} />
                {/* Photo upload hint */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider"
                  style={{ background: 'rgba(0,0,0,0.5)', color: 'rgba(240,244,255,0.3)', border: '1px dashed rgba(255,255,255,0.1)' }}>
                  Photo coming soon
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
