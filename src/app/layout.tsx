import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raheel Iqbal Portfolio",
  description: "Developed by Raheel Iqbal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>          
        {children}
        </body>
    </html>
  );
}
