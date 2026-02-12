export const metadata = {
  title: "SS GPT6 Trade Hub",
  description: "Trade Hub App"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system" }}>
        {children}
      </body>
    </html>
  );
}
