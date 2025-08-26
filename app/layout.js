import "./globals.css";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import CTA from "@/components/section/commonSection/CTA";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "Redbowl | Authentic Hibachi & Signature Dishes",
  description:
    "Discover Redbowl — where the timeless art of teppanyaki meets fresh ingredients, masterful chefs, and unforgettable flavors. A dining experience crafted to create lasting memories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}  antialiased`}>
        <Navbar />
        {children}
        <CTA />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
