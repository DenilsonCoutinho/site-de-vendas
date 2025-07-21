import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { TriggerResizeProvider } from "../../context/triggerResize";

const geistSans = Montserrat({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Site sob medida",
  description: "Criamos site para conforme a sua necessidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="oAJn_0DwQNMfPNYnLWZOg1s2KL3KkcytMaSNQ4vv5VE" />
      </head>
      <body
        className={`${geistSans.className} antialiased`}
      >
        <TriggerResizeProvider>
          {children}
        </TriggerResizeProvider>
      </body>
    </html>
  );
}
