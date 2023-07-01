"use client";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "@/store/storeTypes";
import { Theme, setTheme } from "@/store/themeSlice";
import { capitalize } from "@/utils/helper";

const PROPS = {
	className: "w-6 h-6",
};

const AVAILABLE_THEMES = ["light", "dark", "auto"];

export default function ColorSchemeButton() {
	const themeName = useAppSelector((state) => state.theme.name);
	const dispatch = useAppDispatch();
	const changeTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(setTheme(e.currentTarget.name as Theme));
	};
	const curThemeIcon = (name: Theme) => {
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
				<button>{curThemeIcon(themeName)}</button>
				<div className="absolute top-full">
					<ul>
						{AVAILABLE_THEMES.map((theme) => (
							<li key={theme}>
								<div>
									<button
										name={theme}
										onClick={changeTheme}
										className="rounded-lg text-center inline-flex font-medium text-sm px-5 py-2.5 items-center"
									>
										{curThemeIcon(theme as Theme)}
										{capitalize(theme)}
									</button>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
