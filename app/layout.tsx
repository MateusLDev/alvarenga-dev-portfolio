import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const DMSans = localFont({
  src: "./fonts/DMSans-VariableFont.ttf",
  variable: "--font-dm-sans",
  weight: "400 500 600 700",
});

export const metadata: Metadata = {
  title: "Alvarenga Dev",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DMSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
