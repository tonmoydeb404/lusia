"use client";

import { useEffect, useMemo } from "react";

type ModifierKey = "ctrl" | "meta" | "shift" | "alt";

interface KeyboardShortcutOptions {
  /** The main key to listen for (e.g., "k", "l", "Enter") */
  key: string;
  /** Modifier keys required (e.g., ["ctrl", "shift"]) */
  modifiers?: ModifierKey[];
  /** Callback when shortcut is triggered */
  onTrigger: () => void;
  /** Whether the shortcut is enabled (default: true) */
  enabled?: boolean;
}

interface ShortcutLabel {
  /** Full label (e.g., "⌘⇧L" or "Ctrl+Shift+L") */
  label: string;
  /** Array of individual key labels */
  keys: string[];
  /** Whether the user is on Mac */
  isMac: boolean;
}

const MODIFIER_SYMBOLS: Record<ModifierKey, { mac: string; other: string }> = {
  ctrl: { mac: "⌃", other: "Ctrl" },
  meta: { mac: "⌘", other: "Ctrl" },
  shift: { mac: "⇧", other: "Shift" },
  alt: { mac: "⌥", other: "Alt" },
};

const getIsMac = (): boolean => {
  if (typeof navigator === "undefined") return false;
  return /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
};

/**
 * Hook for handling keyboard shortcuts with platform-aware display labels
 *
 * @example
 * const { label, keys } = useKeyboardShortcut({
 *   key: "l",
 *   modifiers: ["meta", "shift"],
 *   onTrigger: () => toggleTheme(),
 * });
 * // label: "⌘⇧L" (Mac) or "Ctrl+Shift+L" (Windows/Linux)
 */
export const useKeyboardShortcut = (
  options: KeyboardShortcutOptions,
): ShortcutLabel => {
  const { key, modifiers = [], onTrigger, enabled = true } = options;

  const isMac = getIsMac();

  // Generate platform-specific labels
  const shortcutLabel = useMemo<ShortcutLabel>(() => {
    const keys: string[] = [];

    // Add modifier keys in standard order: Ctrl/Cmd, Alt, Shift
    const orderedModifiers: ModifierKey[] = ["ctrl", "meta", "alt", "shift"];

    orderedModifiers.forEach((mod) => {
      if (modifiers.includes(mod)) {
        // Skip ctrl on Mac if meta is also present (both map to Cmd)
        if (mod === "ctrl" && modifiers.includes("meta") && isMac) return;
        // Skip meta on non-Mac if ctrl is also present (both map to Ctrl)
        if (mod === "meta" && modifiers.includes("ctrl") && !isMac) return;

        keys.push(MODIFIER_SYMBOLS[mod][isMac ? "mac" : "other"]);
      }
    });

    // Add the main key (uppercase for display)
    keys.push(key.toUpperCase());

    // Join with + for non-Mac, no separator for Mac (symbols look better together)
    const label = isMac ? keys.join("") : keys.join("+");

    return { label, keys, isMac };
  }, [key, modifiers, isMac]);

  // Set up the event listener
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const pressedKey = e.key.toLowerCase();
      const targetKey = key.toLowerCase();

      if (pressedKey !== targetKey) return;

      // Check all required modifiers
      const modifierChecks: Record<ModifierKey, boolean> = {
        ctrl: e.ctrlKey,
        meta: e.metaKey,
        shift: e.shiftKey,
        alt: e.altKey,
      };

      // For cross-platform support, treat "meta" as either metaKey OR ctrlKey
      const hasMetaOrCtrl =
        modifiers.includes("meta") || modifiers.includes("ctrl");
      const metaOrCtrlPressed = e.metaKey || e.ctrlKey;

      // Check if all required modifiers are pressed
      const allModifiersPressed = modifiers.every((mod) => {
        if (mod === "meta" || mod === "ctrl") {
          return metaOrCtrlPressed;
        }
        return modifierChecks[mod];
      });

      // Check that no extra modifiers are pressed (except for meta/ctrl which we handle specially)
      const extraModifiersPressed = (["shift", "alt"] as ModifierKey[]).some(
        (mod) => modifierChecks[mod] && !modifiers.includes(mod),
      );

      if (allModifiersPressed && !extraModifiersPressed) {
        // Extra check: if we require meta/ctrl, make sure it's actually pressed
        if (hasMetaOrCtrl && !metaOrCtrlPressed) return;

        e.preventDefault();
        onTrigger();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [key, modifiers, onTrigger, enabled]);

  return shortcutLabel;
};

export default useKeyboardShortcut;
