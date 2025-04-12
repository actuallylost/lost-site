import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
	title: "Lost's Developer Cave",
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
