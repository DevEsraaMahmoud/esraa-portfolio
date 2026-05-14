"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";

function useIsClient() {
  return React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

type AriaLabels = {
  toggleTheme: string;
  toggleThemeLoading: string;
  switchToLight: string;
  switchToDark: string;
};

const defaultAria: AriaLabels = {
  toggleTheme: "Toggle color theme",
  toggleThemeLoading: "Toggle color theme",
  switchToLight: "Switch to light mode",
  switchToDark: "Switch to dark mode",
};

export function ThemeToggle({
  ariaLabels,
}: {
  ariaLabels?: Partial<AriaLabels>;
}) {
  const a = { ...defaultAria, ...ariaLabels };
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="rounded-xl"
        aria-label={a.toggleThemeLoading}
        disabled
      >
        <Sun className="size-5 opacity-40" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="rounded-xl"
      aria-label={isDark ? a.switchToLight : a.switchToDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="size-5 text-zinc-200" />
      ) : (
        <Moon className="size-5 text-zinc-700" />
      )}
    </Button>
  );
}
