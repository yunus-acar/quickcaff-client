import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ApolloProvider from "@/components/providers/apollo.provider";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "QuickCaff",
  description: "QuickCaff ile en sevdiğiniz kahveyi kolayca bulun!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ApolloProvider>
        <body className={`${poppins.className} bg-brand-background`}>
          <nav className="fixed w-full left-0 py-10 top-0 right-0">
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="QuickCaff"
                width={100}
                height={100}
                className="w-36 h-12 object-cover"
              />
            </Link>
          </nav>
          <div className="flex  items-center justify-center  min-h-screen">
            {children}
          </div>
          <Toaster />
        </body>
      </ApolloProvider>
    </html>
  );
}
