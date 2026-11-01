"use client";

import { useSyncExternalStore } from "react";
import { dohaToday } from "@/lib/doha-date";

const subscribe = () => () => {};

// `null` while prerendering: the current date can't be part of the static shell.
export function useDohaToday() {
  return useSyncExternalStore(subscribe, dohaToday, () => null);
}
