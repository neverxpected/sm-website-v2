"use client";
import React from 'react';

export const PulsingWire = ({ isSwitchedOn }: { isSwitchedOn: boolean }) => {
  return (
    <svg width="200" height="100" viewBox="0 0 200 100" className="overflow-visible">
      <path d="M0 50 Q 100 0, 200 50" fill="transparent" stroke="#262629" strokeWidth="2" />
      {isSwitchedOn && (
        <path
          d="M0 50 Q 100 0, 200 50"
          fill="transparent"
          stroke="var(--color-gold)"
          strokeWidth="2"
          strokeDasharray="10 5"
          className="animate-[flow_2s_linear_infinite] drop-shadow-[0_0_8px_var(--color-gold)]"
        />
      )}
    </svg>
  );
};
