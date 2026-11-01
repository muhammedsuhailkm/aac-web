// Dates are ISO `YYYY-MM-DD` strings on the Doha calendar, whatever the visitor's
// own timezone is, because the office's closed day is a Doha Friday.
export function dohaToday() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Qatar",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function isFriday(iso: string) {
  return new Date(`${iso}T00:00:00Z`).getUTCDay() === 5;
}

export function nextDays(startIso: string, count: number) {
  const start = new Date(`${startIso}T00:00:00Z`);
  return Array.from({ length: count }, (_, offset) => {
    const date = new Date(start);
    date.setUTCDate(start.getUTCDate() + offset);
    const iso = date.toISOString().slice(0, 10);
    const format = (options: Intl.DateTimeFormatOptions) =>
      new Intl.DateTimeFormat("en-GB", { timeZone: "UTC", ...options }).format(date);
    return {
      iso,
      day: date.getUTCDate(),
      weekday: format({ weekday: "short" }),
      fullLabel: format({ weekday: "long", day: "numeric", month: "long" }),
      closed: isFriday(iso),
    };
  });
}
