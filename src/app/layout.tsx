import "./globals.css";
import { Metadata } from "next";

import Providers from "@/components/providers/Providers";
import Header from "@/components/pageComponents/Header";
import Footer from "@/components/pageComponents/Footer";
import DarkMode from "@/components/etc/DarkMode";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Todo App",
	description: "NextJS Todo App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<DarkMode />
			</head>
			<body className={inter.className}>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
