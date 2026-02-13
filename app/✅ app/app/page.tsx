export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        color: "#fff",
        textAlign: "center",
        padding: 20,
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 10 }}>
        🚀 SSGPT6 Trade Hub
      </h1>

      <p style={{ opacity: 0.7, marginBottom: 30 }}>
        Golden Edition • Live & Stable
      </p>

      <a
        href="/dashboard"
        style={{
          padding: "12px 24px",
          background: "gold",
          color: "#000",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Enter Dashboard
      </a>
    </main>
  );
}