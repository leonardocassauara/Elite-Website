import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Whatsapp from "@/components/Whatsapp/Whatsapp";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-oswald",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Elite Auto Center",
    default: "Elite Auto Center",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${oswald.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body style={{ maxWidth: "100%" }}>
        <Header />
        <main>{children}</main>
        <aside>
          <Whatsapp />
        </aside>
        <Footer />
      </body>
    </html>
  );
}
