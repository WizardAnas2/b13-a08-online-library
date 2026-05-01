import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "BookFlow | Borrow Books Online",
  description: "Digitize your reading experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen flex flex-col">
        <Toaster position="top-center" />
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}