"use client";

// Chemistry chalkboard background — chalk-white SVGs at very low opacity

// ─── Icon SVG paths ────────────────────────────────────────────────────────
const ChalkFlask = ({ size, opacity }: { size: number; opacity: number }) => (
    <svg width={size} height={size} viewBox="0 0 48 64" fill="none"
        stroke="rgba(255,255,238,1)" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"
        style={{ opacity }}>
        <path d="M18 4h12M18 4v18L6 50a4 4 0 0 0 3.5 6h29A4 4 0 0 0 42 50L30 22V4" />
        <line x1="10" y1="42" x2="38" y2="42" />
        <circle cx="16" cy="52" r="2" fill="rgba(255,255,238,0.7)" stroke="none" />
        <circle cx="22" cy="55" r="2" fill="rgba(255,255,238,0.7)" stroke="none" />
        <circle cx="28" cy="52" r="2" fill="rgba(255,255,238,0.7)" stroke="none" />
    </svg>
);

const ChalkAtom = ({ size, opacity }: { size: number; opacity: number }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none"
        stroke="rgba(255,255,238,1)" strokeWidth={2.2} strokeLinecap="round"
        style={{ opacity }}>
        <ellipse cx="32" cy="32" rx="28" ry="10" />
        <ellipse cx="32" cy="32" rx="28" ry="10" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="28" ry="10" transform="rotate(120 32 32)" />
        <circle cx="32" cy="32" r="4" fill="rgba(255,255,238,0.6)" stroke="rgba(255,255,238,1)" strokeWidth={2} />
        <circle cx="32" cy="22" r="3" fill="rgba(255,255,238,0.8)" stroke="none" />
    </svg>
);

const ChalkMolecule = ({ size, opacity }: { size: number; opacity: number }) => (
    <svg width={size} height={size} viewBox="0 0 80 60" fill="none"
        stroke="rgba(255,255,238,1)" strokeWidth={1.8} strokeLinecap="round"
        style={{ opacity }}>
        {/* H-O-H water molecule */}
        <circle cx="40" cy="30" r="8" />
        <circle cx="14" cy="16" r="5.5" />
        <circle cx="66" cy="16" r="5.5" />
        <line x1="33" y1="24" x2="19" y2="20" />
        <line x1="47" y1="24" x2="61" y2="20" />
        <text x="36" y="34" fontSize="8" fill="rgba(255,255,238,0.8)" stroke="none" fontFamily="serif">O</text>
        <text x="10" y="20" fontSize="7" fill="rgba(255,255,238,0.8)" stroke="none" fontFamily="serif">H</text>
        <text x="62" y="20" fontSize="7" fill="rgba(255,255,238,0.8)" stroke="none" fontFamily="serif">H</text>
    </svg>
);

const ChalkBenzene = ({ size, opacity }: { size: number; opacity: number }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none"
        stroke="rgba(255,255,238,1)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
        style={{ opacity }}>
        <polygon points="32,6 56,19 56,45 32,58 8,45 8,19" />
        <circle cx="32" cy="32" r="13" strokeDasharray="5 3" />
    </svg>
);

const ChalkArrow = ({ size, opacity }: { size: number; opacity: number }) => (
    <svg width={size} height={size * 0.4} viewBox="0 0 80 32" fill="none"
        stroke="rgba(255,255,238,1)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
        style={{ opacity }}>
        <line x1="4" y1="16" x2="64" y2="16" />
        <polyline points="50,6 64,16 50,26" />
    </svg>
);

// ─── Text formula elements ──────────────────────────────────────────────────
const ChalkText = ({ text, size, opacity, rotate = 0 }: {
    text: string; size: number; opacity: number; rotate?: number;
}) => (
    <div style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: size,
        color: `rgba(255,255,238,${opacity})`,
        transform: `rotate(${rotate}deg)`,
        letterSpacing: '0.05em',
        whiteSpace: 'nowrap',
        userSelect: 'none',
    }}>
        {text}
    </div>
);

// ─── Positioned instances ──────────────────────────────────────────────────
// LEFT RAIL: x 22–27%  |  RIGHT RAIL: x 68–74%  — never in the content center
const ELEMENTS = [
    // ── LEFT RAIL icons (x: 28–32%) ──
    { type: 'flask', x: 30, y: 8, size: 32, opacity: 0.07, dur: 14, delay: 0, rot: -8 },
    { type: 'atom', x: 31, y: 38, size: 38, opacity: 0.06, dur: 22, delay: 8, rot: -20 },
    { type: 'benzene', x: 28, y: 62, size: 28, opacity: 0.07, dur: 15, delay: 2, rot: 10 },
    { type: 'molecule', x: 32, y: 82, size: 36, opacity: 0.06, dur: 19, delay: 10, rot: 5 },
    { type: 'arrow', x: 29, y: 52, size: 40, opacity: 0.06, dur: 23, delay: 12, rot: 8 },
    // ── RIGHT RAIL icons (true mirror: x = 100 - left → 68–72%) ──
    { type: 'atom', x: 69, y: 8, size: 36, opacity: 0.06, dur: 18, delay: 3, rot: 12 },
    { type: 'flask', x: 68, y: 35, size: 30, opacity: 0.07, dur: 13, delay: 5, rot: 10 },
    { type: 'benzene', x: 72, y: 58, size: 32, opacity: 0.07, dur: 20, delay: 1, rot: 15 },
    { type: 'flask', x: 68, y: 78, size: 28, opacity: 0.06, dur: 17, delay: 4, rot: -12 },
    { type: 'arrow', x: 71, y: 22, size: 44, opacity: 0.06, dur: 25, delay: 7, rot: -3 },
    // ── LEFT RAIL formulas (x: 26–29%) ──
    { type: 'text', text: 'ROAS = Revenue / Spend', x: 26, y: 22, size: 12, opacity: 0.07, dur: 20, delay: 5, rot: -2 },
    { type: 'text', text: 'CTR = Clicks / Impressions', x: 26, y: 48, size: 12, opacity: 0.07, dur: 16, delay: 0, rot: 3 },
    { type: 'text', text: 'LTV > CAC', x: 29, y: 72, size: 14, opacity: 0.08, dur: 14, delay: 8, rot: -4 },
    // ── RIGHT RAIL formulas (mirror: x = 100 - left → 67–70%) ──
    { type: 'text', text: 'CAC = Total Cost / New Customers', x: 67, y: 15, size: 11, opacity: 0.07, dur: 18, delay: 2, rot: 2 },
    { type: 'text', text: 'ROAS = Revenue / Spend', x: 70, y: 45, size: 12, opacity: 0.07, dur: 20, delay: 11, rot: -3 },
    { type: 'text', text: 'LTV > CAC', x: 71, y: 68, size: 14, opacity: 0.08, dur: 15, delay: 6, rot: 5 },
] as const;

export default function FloatingBackground() {
    return (
        <div
            className="hidden lg:block fixed inset-0 pointer-events-none overflow-hidden"
            style={{ zIndex: 0 }}
            aria-hidden="true"
        >
            {ELEMENTS.map((el, i) => (
                <div
                    key={i}
                    className="absolute animate-float"
                    style={{
                        left: `${el.x}%`,
                        top: `${el.y}%`,
                        animationDuration: `${el.dur}s`,
                        animationDelay: `${el.delay}s`,
                    }}
                >
                    {el.type === 'flask' && <ChalkFlask size={el.size} opacity={el.opacity} />}
                    {el.type === 'atom' && <ChalkAtom size={el.size} opacity={el.opacity} />}
                    {el.type === 'molecule' && <ChalkMolecule size={el.size} opacity={el.opacity} />}
                    {el.type === 'benzene' && <ChalkBenzene size={el.size} opacity={el.opacity} />}
                    {el.type === 'arrow' && <ChalkArrow size={el.size} opacity={el.opacity} />}
                    {el.type === 'text' && (
                        <ChalkText
                            text={el.text}
                            size={el.size}
                            opacity={el.opacity}
                            rotate={el.rot}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
