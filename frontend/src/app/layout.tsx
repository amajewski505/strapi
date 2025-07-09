import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "300codes app",
  description: "For 300codes interview",
};
import { ReactQueryProvider } from "@/lib/react-query-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center min-h-screen min-w-screen">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
