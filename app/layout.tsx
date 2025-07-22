import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Siddhant V Patil",
	description: "Designer & Creative Technologist specializing in early-stage innovation and complex problem spaces. 6 years in design & tech.",
	keywords: ["design", "creative technology", "UX design", "innovation", "Germany", "open to work"],
	authors: [{ name: "Siddhant V Patil" }],
	creator: "Siddhant V Patil",
	publisher: "Siddhant V Patil",
	robots: "index, follow",
	openGraph: {
		title: "Siddhant V Patil - Designer & Creative Technologist",
		description: "Designer & Creative Technologist specializing in early-stage innovation and complex problem spaces. 6 years in design & tech.",
		url: "https://www.siddhantpatil.com",
		siteName: "Siddhant V Patil Portfolio",
		// images: [
		// 	{
		// 		url: "/siddhant.jpg", // TODO: Replace with your actual image path
		// 		width: 1200,
		// 		height: 630,
		// 		alt: "Siddhant V Patil - Designer & Creative Technologist",
		// 	},
		// ],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Siddhant V Patil - Designer & Creative Technologist",
		description: "Designer & Creative Technologist specializing in early-stage innovation and complex problem spaces. 6 years in design & tech.",
		// images: ["/siddhant.jpg"], // TODO: Replace with your actual image path
		creator: "@sidomatic11",
	},
	other: {
		"theme-color": "#fbbf24", // Amber color to match your brand
	},
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
