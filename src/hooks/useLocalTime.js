import { useEffect, useState } from "react";

const formatTime = (timeZone) =>
  timeZone
    ? new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone }).format(new Date())
    : null;

// Current time in the given IANA time zone, e.g. "14:05", refreshed every 30s.
export default function useLocalTime(timeZone) {
  const [time, setTime] = useState(() => formatTime(timeZone));

  useEffect(() => {
    if (!timeZone) return;
    const id = setInterval(() => setTime(formatTime(timeZone)), 30_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}
