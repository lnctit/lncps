import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/scrollbar.css"

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import FixedButtons from "./components/FixedButton";
import { CardStackDemo } from "./components/CardStackDemo/CardStackDemo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LNCPS",
  description: "LNCPS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      
        <FixedButtons />

        <Footer />
      </body>
    </html>
  );
}
