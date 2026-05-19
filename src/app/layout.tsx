import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rhoda AI",
  description: "Redefining Robotic Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cloud.typography.com/757620/6264032/css/fonts.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/images/logo/favicon.svg" />
      </head>
      <body className="min-h-screen bg-[#FAFAFA] text-[#1A1A1F]">
        {children}
      </body>
    </html>
  );
}
