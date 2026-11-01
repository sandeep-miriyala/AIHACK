"use client";
import type { ReactNode } from "react";
import { YuktAIWrapper } from "@yuktishaalaa/yuktai";
import AskPageClient from "./AskPageClient";

export default function YuktaiClient({ children }: { children: ReactNode }) {
  return (
    // showRag (the old 💬 button) is replaced by the Ask page panel below
    <YuktAIWrapper position="left" launcher showAccessibility showVibeCoder showAgent showPageTools engine="rust">
      {children}
      {/* right side, above the go-to-top button */}
      <AskPageClient side="right" bottom={96} />
    </YuktAIWrapper>
  );
}