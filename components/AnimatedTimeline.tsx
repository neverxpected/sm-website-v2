"use client";

import { useEffect, useRef, useState } from "react";

type Milestone = {
    year: string;
    label: string;
    body: string;
};

function TimelineItem({
    milestone,
    index,
    isLast,
}: {
    milestone: Milestone;
    index: number;
    isLast: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const accentColor = isLast ? "#FF2D78" : "#9B30FF";
    const yearColor = isLast
        ? "rgba(255,45,120,0.7)"
        : "rgba(155,48,255,0.7)";

    return (
        <div
            ref={ref}
            className="flex gap-6"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
            }}
        >
            {/* Spine column */}
            <div className="flex flex-col items-center w-12 shrink-0">
                {/* Animated dot */}
                <div className="relative mt-1">
                    {isLast ? (
                        /* "Today" — infinite looping ping */
                        <>
                            {visible && (
                                <span
                                    className="absolute inline-flex rounded-full animate-ping"
                                    style={{
                                        inset: '-4px',
                                        background: accentColor,
                                        opacity: 0.35,
                                    }}
                                />
                            )}
                            <div
                                className="w-3 h-3 rounded-full relative z-10"
                                style={{
                                    background: accentColor,
                                    boxShadow: visible ? `0 0 14px ${accentColor}` : "none",
                                    transition: `box-shadow 0.5s ease ${index * 0.15 + 0.4}s`,
                                }}
                            />
                        </>
                    ) : (
                        /* All other dots — one-shot entry pulse */
                        <>
                            <span
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: accentColor,
                                    opacity: visible ? 0 : 0.5,
                                    transform: visible ? "scale(2.5)" : "scale(1)",
                                    transition: `transform 0.8s ease ${index * 0.15 + 0.3}s, opacity 0.8s ease ${index * 0.15 + 0.3}s`,
                                }}
                            />
                            <div
                                className="w-3 h-3 rounded-full relative z-10"
                                style={{
                                    background: accentColor,
                                    boxShadow: visible ? `0 0 12px ${accentColor}` : "none",
                                    transition: `box-shadow 0.5s ease ${index * 0.15 + 0.4}s`,
                                }}
                            />
                        </>
                    )}
                </div>

                {/* Growing spine line */}
                {!isLast && (
                    <div
                        className="w-px mt-2 origin-top"
                        style={{
                            background:
                                "linear-gradient(to bottom, rgba(155,48,255,0.4), rgba(155,48,255,0.05))",
                            minHeight: "60px",
                            flex: 1,
                            transform: visible ? "scaleY(1)" : "scaleY(0)",
                            transition: `transform 0.7s ease ${index * 0.15 + 0.25}s`,
                        }}
                    />
                )}
            </div>

            {/* Content */}
            <div className="pb-10">
                <p
                    className="text-xs font-bold uppercase tracking-[0.2em] mb-1"
                    style={{ color: yearColor }}
                >
                    {milestone.year}
                </p>
                <h2 className="text-lg font-black text-white mb-3">
                    {milestone.label}
                </h2>
                <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(240,244,255,0.55)" }}
                >
                    {milestone.body}
                </p>
            </div>
        </div>
    );
}

export default function AnimatedTimeline({
    milestones,
}: {
    milestones: Milestone[];
}) {
    return (
        <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
                <TimelineItem
                    key={m.year}
                    milestone={m}
                    index={i}
                    isLast={i === milestones.length - 1}
                />
            ))}
        </div>
    );
}
