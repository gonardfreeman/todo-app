import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import themeSlice from "./themeSlice";

export const store = configureStore({
	reducer: {
		sidebar: sidebarReducer,
		theme: themeSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
