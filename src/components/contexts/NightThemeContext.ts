import { createContext } from "react";
import type { Theme } from "@/store/themeSlice";

const initialContext: Theme = "light";

export const NightThemeContext = createContext<Theme>(initialContext);
