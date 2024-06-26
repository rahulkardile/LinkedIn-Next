import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-[#f1f0ed] min-h-screen flex flex-col`}>
          <Navbar />
          <div className="flex-1 w-full">
            <Toaster />
            <main className="w-screen md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
