"use client";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

import { capitalize } from "@/utils/helper";
import { useEffect, useRef, useState } from "react";

const PROPS = {
	className: "w-6 h-6",
};

const AVAILABLE_THEMES = ["light", "dark", "auto"];

export default function ColorSchemeButton() {
	const [themeName, setTheme] = useState("light");
	const [isOpen, setIsOpen] = useState(false);

	const popupRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};
		if (isOpen) {
			window.addEventListener("click", handleClickOutside);
		}
		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, [isOpen]);

	useEffect(() => {
		console.log("once");
		if (!("theme" in localStorage)) {
			setTheme("auto");
			return;
		}
		setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
	}, []);

	const handleChangeTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { name },
		} = e;
		setTheme(name);
		if (name === "auto") {
			localStorage.removeItem("theme");
			document.documentElement.classList.remove("dark");
			return;
		}
		localStorage.setItem("theme", name);
		document.documentElement.classList.toggle("dark", name === "dark");
	};

	const handleOpenPopup = () => {
		setIsOpen(!isOpen);
	};

	const curThemeIcon = (name: string) => {
		switch (name) {
			case "auto":
				return <ComputerDesktopIcon {...PROPS}></ComputerDesktopIcon>;
			case "light":
				return <SunIcon {...PROPS} />;
			case "dark":
				return <MoonIcon {...PROPS} />;
		}
	};
	return (
		<>
			<div className="relative">
				<button onClick={handleOpenPopup}>{curThemeIcon(themeName)}</button>
				{isOpen && (
					<ul
						ref={popupRef}
						role="listbox"
						className="absolute top-full right-0 text-sm font-semibold z-50 w-32 rounded-lg mt-8 overflow-hidden py-1 text-slate-700 dark:text-slate-50 bg-slate-50 dark:bg-slate-600 shadow-lg ring-1 ring-slate-900/10 dark:ring-0"
					>
						{AVAILABLE_THEMES.map((theme) => (
							<li
								key={theme}
								role="option"
								aria-selected={theme === themeName}
								className={`hover:bg-slate-700/10 dark:hover:bg-slate-100/10 ${
									theme === themeName ? `fill-sky-400/20 stroke-sky-500 text-sky-500` : ""
								}`}
							>
								<button
									name={theme}
									onClick={handleChangeTheme}
									className="text-center inline-flex px-5 py-2.5 gap-4"
								>
									{curThemeIcon(theme)}
									{capitalize(theme)}
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
}
