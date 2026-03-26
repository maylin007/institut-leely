"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const hours = [
  { open: 8, close: 18 },
  { open: 8, close: 18 },
  { open: 8, close: 18 },
  { open: 8, close: 18 },
  { open: 8, close: 18 },
  { open: 8, close: 18 },
  { open: -1, close: -1 },
];

function getTahitiTime() {
  const now = new Date();
  return new Date(now.toLocaleString("en-US", { timeZone: "Pacific/Tahiti" }));
}

function getStatus() {
  const tahiti = getTahitiTime();
  const jsDay = tahiti.getDay();
  const dayIndex = jsDay === 0 ? 6 : jsDay - 1;
  const currentHour = tahiti.getHours() + tahiti.getMinutes() / 60;
  const todaySchedule = hours[dayIndex];
  const isOpen =
    todaySchedule.open >= 0 &&
    currentHour >= todaySchedule.open &&
    currentHour < todaySchedule.close;
  return { isOpen, dayIndex };
}

export function HoursTable() {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    dayIndex: number;
  } | null>(null);
  const { lang } = useLanguage();
  const t = translations.openStatus;
  const dayNames = t.days[lang];

  useEffect(() => {
    setStatus(getStatus());
    const interval = setInterval(() => setStatus(getStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-0">
      {hours.map((h, i) => {
        const isToday = status && i === status.dayIndex;
        const isOpen = isToday && status.isOpen;

        return (
          <div
            key={dayNames[i]}
            className={`flex items-center justify-between py-3 border-b border-divider/50 text-[15px] ${
              isToday ? "text-dark" : "text-muted"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={isToday ? "font-medium" : ""}>{dayNames[i]}</span>
              {isToday && (
                <span className="flex items-center gap-1.5 text-[11px] tracking-wider uppercase">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isOpen ? "bg-green-500 animate-pulse" : "bg-red-400"
                    }`}
                  />
                  <span className={isOpen ? "text-green-600" : "text-red-400"}>
                    {isOpen ? t.ouvert[lang] : t.ferme[lang]}
                  </span>
                </span>
              )}
            </div>
            <span className={h.open < 0 ? "text-muted/50" : ""}>
              {h.open < 0
                ? t.ferme[lang]
                : `${String(h.open).padStart(2, "0")}h — ${String(h.close).padStart(2, "0")}h`}
            </span>
          </div>
        );
      })}
    </div>
  );
}
