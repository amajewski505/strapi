import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "300codes app",
  description: "For 300codes interview",
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
