import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

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
			<body className="max-w-5xl mx-auto sm:pt-16">
				<div className="min-h-screen w-full lg:w-[calc(100%-4rem)] mx-auto">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
