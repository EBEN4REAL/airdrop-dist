import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "./providers";
import { Header } from "@/components/Header/Header"
import { ToastRootProvider } from "@/components/ui/ToastRoot";

const GITHUB_IURL =
  "https://github.com/EBEN4REAL/airdrop-dist";

export const metadata: Metadata = {
  title: "Airdrop dist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastRootProvider>
          <Providers>
          <Header githubUrl={GITHUB_IURL} />
            {children}
          </Providers>
        </ToastRootProvider>
      </body>
    </html>
  );
}
