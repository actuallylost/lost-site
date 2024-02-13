import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
	title: "actuallylost's portfolio",
	description: "Hi I'm lost and this is my dev blog!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
