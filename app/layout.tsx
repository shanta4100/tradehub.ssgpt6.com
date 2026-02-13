import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SS GPT6 Trade Hub",
  description: "Trade Hub App",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/tradehub-icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    // optional (works even if it's the same file)
    apple: [{ url: "/tradehub-icon-192.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui" }}>{children}</body>
    </html>
  );
}