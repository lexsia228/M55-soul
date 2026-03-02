import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { jaJP } from "@clerk/localizations";
import { SiteFooter } from "./_components/SiteFooter";

export const metadata: Metadata = {
  title: "M55",
  description: "M55 digital content service.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider localization={jaJP}>
      <html lang="ja">
        <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" }}>
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <div style={{ flex: "1 0 auto" }}>{children}</div>
            <SiteFooter />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}