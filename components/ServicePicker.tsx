"use client";

import { useState } from "react";

const SERVICES = [
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "AI Receptionist",
    "AI Integrations",
];

export default function ServicePicker() {
    const [selected, setSelected] = useState<string[]>([]);

    function toggle(service: string) {
        setSelected((prev) =>
            prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
        );
    }

    return (
        <div>
            <label
                className="block text-xs font-semibold mb-2"
                style={{ color: "#374151" }}
            >
                Service Interest{" "}
                <span style={{ color: "#6B7280", fontWeight: 400 }}>
                    (select all that apply)
                </span>
            </label>
            <div className="flex flex-wrap gap-2">
                {SERVICES.map((service) => {
                    const active = selected.includes(service);
                    return (
                        <button
                            key={service}
                            type="button"
                            onClick={() => toggle(service)}
                            className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
                            style={{
                                background: active
                                    ? "linear-gradient(135deg, rgba(255,45,120,0.15), rgba(155,48,255,0.15))"
                                    : "#F3F4F6",
                                border: active
                                    ? "1px solid rgba(255,45,120,0.55)"
                                    : "1px solid rgba(0,0,0,0.15)",
                                color: active ? "#FF2D78" : "#374151",
                                boxShadow: active ? "0 0 12px rgba(255,45,120,0.15)" : "none",
                            }}
                        >
                            {active && (
                                <span className="mr-1.5" style={{ color: "#FF2D78" }}>
                                    ✓
                                </span>
                            )}
                            {service}
                        </button>
                    );
                })}
            </div>
            {/* Hidden inputs so form submissions capture the selections */}
            {selected.map((s) => (
                <input key={s} type="hidden" name="service_interest" value={s} />
            ))}
        </div>
    );
}
