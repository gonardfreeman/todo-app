import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "@/types";

export interface SidebarState {
	todos: Todo[];
	isOpen: boolean;
}

const initialState: SidebarState = {
	todos: [],
	isOpen: false,
};

const sidebarSlice = createSlice({
	initialState,
	name: "sidebar",
	reducers: {
		loadInitialTodos: (state, action: PayloadAction<Todo[]>) => {
			state.todos = action.payload;
		},
		setSidebarVisibility: (state, action: PayloadAction<boolean>) => {
			state.isOpen = action.payload;
		},
	},
});

export const { loadInitialTodos, setSidebarVisibility } = sidebarSlice.actions;
export default sidebarSlice.reducer;
