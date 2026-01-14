"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface CounterContextType {
  globalCount: number;
  handleGlobalClick: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [globalCount, setGlobalCount] = useState(0);
  const handleGlobalClick = () => setGlobalCount((prev) => prev + 1);

  return (
    <CounterContext.Provider value={{ globalCount, handleGlobalClick }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useGlobalCounter = () => {
  const context = useContext(CounterContext);
  if (!context) throw new Error("useGlobalCounter debe usarse dentro de CounterProvider");
  return context;
};