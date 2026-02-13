import type { ReactNode } from "react";

export const metadata = {
  title: "SS GPT6 Trade Hub",
  description: "Trade Hub App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* iOS Home Screen Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* Basic favicon fallback */}
        <link rel="icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>

      <body
        style={{
          margin: 0,
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        {children}
      </body>
    </html>
  );
}