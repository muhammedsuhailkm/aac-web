"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { nextDays } from "@/lib/doha-date";
import { useDohaToday } from "@/lib/use-doha-today";

const tile = "grid min-h-18 place-content-center rounded border text-center";

export function MeetingPicker() {
  const today = useDohaToday();
  const days = useMemo(() => (today ? nextDays(today, 5) : null), [today]);
  const [picked, setPicked] = useState<string | null>(null);
  const selected = picked ?? days?.find((day) => !day.closed)?.iso ?? null;

  return (
    <>
      <fieldset className="mt-5">
        <legend className="sr-only">Preferred meeting day</legend>
        <div className="grid grid-cols-5 gap-2">
          {days
            ? days.map((day) => (
                <label key={day.iso} className="group relative">
                  <input
                    type="radio"
                    name="meeting-day"
                    value={day.iso}
                    checked={selected === day.iso}
                    disabled={day.closed}
                    onChange={() => setPicked(day.iso)}
                    className="peer absolute inset-0 cursor-pointer opacity-0 disabled:cursor-not-allowed"
                  />
                  <span
                    className={`${tile} border-white/15 bg-white/8 transition-colors group-hover:border-gold/60 peer-checked:border-gold peer-checked:bg-gold peer-checked:text-brand-deep peer-disabled:border-white/8 peer-disabled:bg-transparent peer-disabled:text-white/35 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold`}
                  >
                    <span className="sr-only">
                      {day.fullLabel}
                      {day.closed ? " (closed)" : ""}
                    </span>
                    <span aria-hidden="true" className="font-display text-2xl leading-tight">
                      {day.day}
                    </span>
                    <span aria-hidden="true" className="text-[0.6875rem] font-bold tracking-[0.12em] uppercase">
                      {day.weekday}
                    </span>
                  </span>
                </label>
              ))
            : Array.from({ length: 5 }, (_, index) => (
                <span key={index} className={`${tile} border-white/15 bg-white/8`} />
              ))}
        </div>
      </fieldset>
      <p className="mt-4 text-sm text-white/75">
        Fridays are closed. Choose a date and we&apos;ll have an advisor ready.
      </p>
      <Link
        href={selected ? `/contact?date=${selected}#enquiry` : "/contact#enquiry"}
        className="btn btn-gold mt-5"
      >
        Request this date
        <ArrowRight aria-hidden="true" className="size-4" />
      </Link>
    </>
  );
}
