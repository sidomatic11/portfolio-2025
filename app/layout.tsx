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
			<body className="max-w-5xl mx-auto">
				<div className="min-h-screen w-full">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
