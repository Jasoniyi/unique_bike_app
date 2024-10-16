import type { Metadata } from "next";
import "./globals.css";
import { Barl, Rob, BarlowCon200, BarlowCon600 } from "./Fonts/fonts";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

export const metadata: Metadata = {
  title: "Unique Bikes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${BarlowCon200.className} font-extrabold`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
