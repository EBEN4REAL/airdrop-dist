import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "./providers";
import { Header } from "@/components/Header/Header"

const GITHUB_IURL =
  "https://github.com/EBEN4REAL/cyfrin-full-stack-web3-app-Tsender";

export const metadata: Metadata = {
  title: "Air drop dist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Header githubUrl={GITHUB_IURL} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
