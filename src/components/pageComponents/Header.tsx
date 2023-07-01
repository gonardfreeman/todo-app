import ButtonIcon from "../buttons/ButtonIcon";
import ColorSchemeSelector from "../selectors/ColorSchemeSelector";

function Header() {
	return (
		<header className="border-b sticky top-0 z-40 border-slate-900/10 ">
			<div className="max-w-7xl mx-auto px-6 py-4">
				<div className="flex items-center h-8 justify-between">
					<div className="flex gap-4">
						<h1 className="text-2xl text-slate-700">TODO App</h1>
					</div>
					<div className="flex gap-2">
						<ColorSchemeSelector />
						<ButtonIcon name="burger" />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
