import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hanumantha",
  description: "Welcome to my website",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body style={{maxWidth:"1400px",margin:"0 auto",padding:"0 1rem"}} className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
