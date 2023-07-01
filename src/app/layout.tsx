import "./globals.css";

import Providers from "@/components/providers/Providers";
import Header from "@/components/pageComponents/Header";
import Footer from "@/components/pageComponents/Footer";
import ColorSchemeProvider from "@/components/providers/ColorSchemeProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Todo App",
	description: "NextJS Todo App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<ColorSchemeProvider>
						<Header />
						{children}
						<Footer />
					</ColorSchemeProvider>
				</Providers>
			</body>
		</html>
	);
}
