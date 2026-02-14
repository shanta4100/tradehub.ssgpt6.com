export default function HomePage() {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.h1}>SS GPT6 Trade Hub</h1>
        <p style={styles.sub}>
          Status: <span style={styles.badge}>Live ✅</span>
        </p>
      </header>

      <section style={styles.card}>
        <h2 style={styles.h2}>Quick Actions</h2>
        <div style={styles.grid}>
          <a style={styles.btn} href="/dashboard">Open Dashboard</a>
          <a style={styles.btn} href="/signals">Signals</a>
          <a style={styles.btn} href="/pricing">Pricing</a>
          <a style={styles.btn} href="/login">Login</a>
        </div>
      </section>

      <section style={styles.card}>
        <h2 style={styles.h2}>Install on iPhone</h2>
        <ol style={styles.ol}>
          <li>Tap the <b>Share</b> button (⬆️) in Safari</li>
          <li>Scroll and tap <b>Add to Home Screen</b></li>
          <li>Tap <b>Add</b></li>
        </ol>
        <p style={styles.note}>
          Tip: If you don’t see “Add to Home Screen”, reload the page and try again.
        </p>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Powered by <b>GNAIAAAC</b> • Trade Hub v1
        </p>
      </footer>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    padding: "40px 18px",
    maxWidth: 900,
    margin: "0 auto",
  },
  header: {
    marginBottom: 18,
  },
  h1: {
    fontSize: 40,
    lineHeight: 1.1,
    margin: 0,
    letterSpacing: -0.5,
  },
  sub: {
    marginTop: 10,
    fontSize: 18,
  },
  badge: {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(0,0,0,0.12)",
  },
  card: {
    border: "1px solid rgba(0,0,0,0.12)",
    borderRadius: 16,
    padding: 18,
    marginTop: 14,
  },
  h2: {
    margin: "0 0 12px 0",
    fontSize: 20,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
    gap: 10,
  },
  btn: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    padding: "12px 14px",
    borderRadius: 12,
    border: "1px solid rgba(0,0,0,0.15)",
    fontWeight: 600,
  },
  ol: {
    paddingLeft: 18,
    margin: "10px 0 0 0",
    lineHeight: 1.6,
  },
  note: {
    marginTop: 10,
    fontSize: 14,
    opacity: 0.8,
  },
  footer: {
    marginTop: 26,
    paddingTop: 14,
    borderTop: "1px solid rgba(0,0,0,0.10)",
  },
  footerText: {
    margin: 0,
    fontSize: 14,
    opacity: 0.85,
  },
};