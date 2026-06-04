"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  horas: number;
  minutos: number;
  segundos: number;
}

function calcTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    horas:    Math.floor(diff / 1000 / 60 / 60),
    minutos:  Math.floor((diff / 1000 / 60) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function CountdownTimer({ targetHours = 23 }: { targetHours?: number }) {
  const [target] = useState(() => {
    const t = new Date();
    t.setHours(t.getHours() + targetHours, 0, 0, 0);
    return t;
  });

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calcTimeLeft(target));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTimeLeft(calcTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!mounted) {
    return (
      <div className="flex items-center gap-3">
        {["00", "00", "00"].map((v, i) => (
          <TimeBlock key={i} value={v} label={["horas", "min", "seg"][i]} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <TimeBlock value={pad(timeLeft.horas)}   label="horas" />
      <Separator />
      <TimeBlock value={pad(timeLeft.minutos)} label="min" />
      <Separator />
      <TimeBlock value={pad(timeLeft.segundos)} label="seg" />
    </div>
  );
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-rosa-50/15 border border-rosa-50/30 text-rosa-50 flex items-center justify-center font-display text-3xl font-light tabular-nums backdrop-blur-sm">
        {value}
      </div>
      <p className="text-label-upper text-rosa-200/60 mt-2" style={{ fontSize: "9px" }}>
        {label}
      </p>
    </div>
  );
}

function Separator() {
  return (
    <span className="font-display text-3xl text-rosa-50/50 font-light mb-4 select-none">:</span>
  );
}
