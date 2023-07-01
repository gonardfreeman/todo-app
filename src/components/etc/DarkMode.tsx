export default function DarkMode() {
	const scriptContent = `
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }`;
	return <script dangerouslySetInnerHTML={{ __html: scriptContent }} />;
}
