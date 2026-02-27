"use client";
import React, { createContext, useContext, useState } from 'react';

interface SwitchContextType {
  isSwitchedOn: boolean;
  toggle: () => void;
}

const SwitchContext = createContext<SwitchContextType>({
  isSwitchedOn: false,
  toggle: () => {},
});

export function SwitchProvider({ children }: { children: React.ReactNode }) {
  const [isSwitchedOn, setIsSwitchedOn] = useState(false);
  const toggle = () => setIsSwitchedOn((prev) => !prev);

  return (
    <SwitchContext.Provider value={{ isSwitchedOn, toggle }}>
      {children}
    </SwitchContext.Provider>
  );
}

export function useSwitchState() {
  return useContext(SwitchContext);
}
