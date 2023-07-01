import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type DarkLight = "light" | "dark";
export type Theme = DarkLight | "auto";

export interface SidebarState {
	name: Theme;
}

const initialState: SidebarState = {
	name: "light",
};

const themeSlice = createSlice({
	initialState,
	name: "theme",
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.name = action.payload;
		},
	},
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
