import type { Metadata } from "next";
import { DM_Serif_Text, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
    subsets: ["latin"],
    variable: "--inter",
});

const dmSerif = DM_Serif_Text({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--dm-serif",
});

export const metadata: Metadata = {
    title: "Guitar Student Portal",
    description: "See the lesson plans created for you by your guitar teacher",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen, bg-background font-sans antialiased bg-gradient-to-r from-rose-100 to-teal-100",
                    inter.variable,
                    dmSerif.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
