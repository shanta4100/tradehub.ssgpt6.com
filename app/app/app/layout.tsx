import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSGPT6 Trade Hub",
  description: "Trade Hub App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        {children}
      </body>
    </html>
  );
}