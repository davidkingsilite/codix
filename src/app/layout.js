import { Inter, Roboto} from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codix Blog",
  description: "world dormination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">  
           <Navbar/>
           {children}
           <Footer/>
        </div>
      </body>
    </html>
  );
}
