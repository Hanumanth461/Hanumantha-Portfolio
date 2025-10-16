import "./globals.css";
import Head from "next/head";
import { poppins } from "@/constant";
import AppLayout from "./appLayout";
import ScrollToTop from "@/components/ScrollToTop";
 

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
      <body style={{maxWidth:"1400px",margin:"0 auto",padding:"0 1rem"}} className={poppins.className}>
        <AppLayout>
          {children}
          <ScrollToTop/>
        </AppLayout>
      </body>
    </html>
  );
}
