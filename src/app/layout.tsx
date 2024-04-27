import { Button, buttonVariants } from "@/components/ui/button";
import type { Metadata } from "next";

import { cn } from "@/lib/utils";

import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/visual-toggle";
import { ReactQueryClientProvider } from "@/components/queryProvider";

// const fontSans = Noto_Serif({
//   subsets: ["latin"],
//   variable: "--Noto_Serif",
// });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Vincent Carrancho",
  description:
    "Vincent Carrancho, a software engineer for Salesforce. He is a fullstack developer with a ton a projects under his belt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const buttons = routes.map((route) => {
    "use client";
    return (
      <div>
        <a tabIndex={-1} href={route.path}>
          <Button variant={"ghost"}>{route.name}</Button>
        </a>
      </div>
    );
  });

  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased flex flex-col items-center",
              fontSans.variable
            )}
          >
            <div className="w-full px-[16.5%] ">
              <header>
                <nav className="flex justify-between items-center">
                  <ModeToggle />
                  <div className="flex">{buttons}</div>
                </nav>
              </header>
            </div>
            <div className="w-2/3">
              <div>{children}</div>
            </div>
          </body>
        </ThemeProvider>
      </html>
    </ReactQueryClientProvider>
  );
}
