// src/app/layout.js (or src/app/layout.jsx)
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Copyright from "@/components/Copyright";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal Dashboard",
  description: "Created for Internship Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Added bg-gray-50 to the body className to set the background color */}
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main className="p-6">{children}</main>
        <Copyright />
      </body>
    </html>
  );
}
