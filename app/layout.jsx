import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { Nunito } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';

config.autoAddCss = false;
const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Genesis Real Estate",
  description: "Property to rent and property for sale in Zimbabwe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
