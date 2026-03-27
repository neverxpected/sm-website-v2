"use client";

import { useState } from "react";

const SERVICES = [
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "Bing Ads",
    "AI Systems",
];

const MOBILE_CATEGORIES = [
    "Paid Ads",
    "AI Automations",
];

export default function ServicePicker() {
    const [selected, setSelected] = useState<string[]>([]);
    const [mobileSelected, setMobileSelected] = useState<string[]>([]);

    function toggle(service: string) {
        setSelected((prev) =>
            prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
        );
    }

    function toggleMobile(category: string) {
        setMobileSelected((prev) =>
            prev.includes(category)
                ? prev.filter((s) => s !== category)
                : [...prev, category]
        );
    }

    const hasSelection = selected.length > 0 || mobileSelected.length > 0;

    return (
        <div>
            <label
                className="block text-xs font-semibold mb-2"
                style={{ color: "#ffffff" }}
            >
                Service Interest{" "}
                <span style={{ color: "#2fe8a2" }}>*</span>{" "}
                <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>(select all that apply)</span>
            </label>

            {/* Mobile: 2 category buttons */}
            <div className="flex flex-wrap gap-2 md:hidden">
                {MOBILE_CATEGORIES.map((category) => {
                    const active = mobileSelected.includes(category);
                    return (
                        <button
                            key={category}
                            type="button"
                            onClick={() => toggleMobile(category)}
                            className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer"
                            style={{
                                background: active
                                    ? "rgba(47,232,162,0.15)"
                                    : "transparent",
                                border: active
                                    ? "1px solid rgba(47,232,162,0.55)"
                                    : "1px solid rgba(255,255,255,0.2)",
                                color: active ? "#2fe8a2" : "rgba(255,255,255,0.7)",
                                boxShadow: active ? "0 0 12px rgba(47,232,162,0.15)" : "none",
                            }}
                        >
                            {active && (
                                <span className="mr-1.5" style={{ color: "#2fe8a2" }}>
                                    ✓
                                </span>
                            )}
                            {category}
                        </button>
                    );
                })}
            </div>

            {/* Desktop: individual service buttons */}
            <div className="hidden md:flex flex-wrap gap-2">
                {SERVICES.map((service) => {
                    const active = selected.includes(service);
                    return (
                        <button
                            key={service}
                            type="button"
                            onClick={() => toggle(service)}
                            className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer"
                            style={{
                                background: active
                                    ? "rgba(47,232,162,0.15)"
                                    : "transparent",
                                border: active
                                    ? "1px solid rgba(47,232,162,0.55)"
                                    : "1px solid rgba(255,255,255,0.2)",
                                color: active ? "#2fe8a2" : "rgba(255,255,255,0.7)",
                                boxShadow: active ? "0 0 12px rgba(47,232,162,0.15)" : "none",
                            }}
                        >
                            {active && (
                                <span className="mr-1.5" style={{ color: "#2fe8a2" }}>
                                    ✓
                                </span>
                            )}
                            {service}
                        </button>
                    );
                })}
            </div>

            {/* Required guard */}
            <input
                type="text"
                name="_service_required_guard"
                required
                aria-hidden="true"
                tabIndex={-1}
                value={hasSelection ? 'ok' : ''}
                onChange={() => { }}
                style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: 0, width: 0 }}
            />
            {/* Hidden inputs — desktop selections */}
            {selected.map((s) => (
                <input key={s} type="hidden" name="service_interest" value={s} />
            ))}
            {/* Hidden inputs — mobile selections */}
            {mobileSelected.map((s) => (
                <input key={s} type="hidden" name="service_interest" value={s} />
            ))}
        </div>
    );
}
