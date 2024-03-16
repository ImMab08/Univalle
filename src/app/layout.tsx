import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/shared/Header";
import { CustomMenu } from "@/components/shared/IA"
import '@/sass/globals.sass';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tickets Univalle",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <CustomMenu />
        {children}
      </body>
    </html>
  );
}
