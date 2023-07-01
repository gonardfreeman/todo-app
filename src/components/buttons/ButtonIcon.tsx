"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";

import { setSidebarVisibility } from "@/store/sidebarSlice";

import { useAppDispatch, useAppSelector } from "@/store/storeTypes";

export default function ButtonIcon({ name }: { name: string }) {
	const dispatch = useAppDispatch();
	const isOpen = useAppSelector((state) => state.sidebar.isOpen);
	if (name !== "burger") {
		return null;
	}

	const handleClick = () => {
		dispatch(setSidebarVisibility(!isOpen));
	};

	return (
		<button onClick={handleClick}>
			<Bars3Icon className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
		</button>
	);
}
