export default function Home() {
  return (
    <main
      style={{
        padding: 40,
        textAlign: "center",
        fontFamily: "system-ui",
      }}
    >
      <h1 style={{ fontSize: 36, marginBottom: 20 }}>
        🚀 SS GPT6 Trade Hub
      </h1>

      <p style={{ fontSize: 18, opacity: 0.7 }}>
        Status: Live ✅
      </p>

      <div style={{ marginTop: 40 }}>
        <a
          href="/api/cron/daily"
          style={{
            display: "inline-block",
            padding: "12px 24px",
            background: "#111",
            color: "#fff",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          Test Automation Engine
        </a>
      </div>
    </main>
  );
}