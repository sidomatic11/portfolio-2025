import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Siddhant V Patil",
	description: "Siddhant V Patil's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} w-full overflow-x-hidden dot-grid`}>
				<div className="min-h-screen max-w-5xl mx-auto lg:w-[calc(100%-4rem)] relative pb-32 sm:pt-16 text-gray-700 px-8 lg:px-0">
					{children}
				</div>
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}
