"use client";
import { NightThemeContext } from "../contexts/NightThemeContext";

import { useAppSelector } from "@/store/storeTypes";

export default function ColorSchemeProvider({ children }: { children: React.ReactNode }) {
	const theme = useAppSelector((state) => state.theme.name);
	return <NightThemeContext.Provider value={theme}>{children}</NightThemeContext.Provider>;
}
