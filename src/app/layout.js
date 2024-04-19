import { Inter, Roboto} from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codix Blog",
  description: "world dormination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
          <div className="container">  
           <Navbar/>
           {children}
           <Footer/>
          </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

