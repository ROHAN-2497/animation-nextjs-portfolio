import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "animation portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><div className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
        <div className="h-24"><NavBar/>
        
        </div>
        {children}
        </div></body>
    </html>
  );
}
