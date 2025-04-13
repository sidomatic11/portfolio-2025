import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

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
			<body className={`${inter.className} max-w-5xl mx-auto`}>
				<div className="min-h-screen w-full lg:w-[calc(100%-4rem)] mx-auto relative pb-32 sm:pt-16 text-gray-700">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
