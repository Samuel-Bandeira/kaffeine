import { Appearance } from "react-native";
import { create } from "zustand";

interface ThemeState {
  colorScheme: "light" | "dark";
  setColorScheme: (scheme: "light" | "dark") => void;
  toggleColorScheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  colorScheme: Appearance.getColorScheme() ?? "dark",

  setColorScheme: (scheme) => set({ colorScheme: scheme }),

  toggleColorScheme: () =>
    set((state) => ({
      colorScheme: state.colorScheme === "light" ? "dark" : "light",
    })),
}));
