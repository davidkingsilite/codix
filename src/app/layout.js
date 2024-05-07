import { Inter, Roboto} from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {

  title: {
    template: '%s | Codix Blog',
    default: 'Codix Blog', // a default is required when creating a template
  },
  description: "Welcome to the Codix blog page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <AuthProvider>
                 <div className="container"> 
                 <div className="wrapper">
                  <Navbar/>
                   {children}
                  <Footer/>
                 </div>
                 </div> 
              </AuthProvider>     
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

