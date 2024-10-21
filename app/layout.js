"use client";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import "./globals.css";
import {metadata} from "@/app/metadata";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <html lang="en" className="h-full">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen ${isHomePage ? "bg-home" : "bg-other"}`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        </body>
        </html>
    );
}