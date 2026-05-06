import { S, colors } from "../../styles/theme";

const styles = {
  section: {
    minHeight: "100vh", display: "flex", alignItems: "center",
    paddingTop: 64, position: "relative", overflow: "hidden",
  },
  inner: { maxWidth: 1100, margin: "0 auto", padding: "0 5%", width: "100%" },
  tag: {
    display: "inline-flex", alignItems: "center", gap: 8,
    background: "rgba(0,229,195,0.08)", border: "1px solid rgba(0,229,195,0.2)",
    borderRadius: 100, padding: "6px 16px", fontSize: 13, fontWeight: 500,
    color: colors.accent, marginBottom: 24,
  },
  name: {
    fontFamily: "'Syne', sans-serif", fontSize: "clamp(40px, 7vw, 80px)",
    fontWeight: 800, letterSpacing: "-0.04em", color: "#fff",
    lineHeight: 1.05, margin: "0 0 16px",
  },
  nameAccent: {
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    backgroundImage: "linear-gradient(135deg, #00e5c3, #3b82f6)",
  },
  sub: {
    fontSize: "clamp(16px, 2.5vw, 20px)", color: colors.faint,
    maxWidth: 540, marginBottom: 40, lineHeight: 1.6,
  },
  btns: { display: "flex", gap: 16, flexWrap: "wrap" },
  btnLarge:        { ...S.btnPrimary, fontSize: 16, padding: "14px 32px" },
  btnOutlineLarge: { ...S.btnOutline, fontSize: 16, padding: "14px 32px" },
};

export default function Hero({ onScrollTo }) {
  return (
    <section id="home" style={styles.section}>
      <div className="glow" />
      <div className="glow-2" />
      <div style={styles.inner}>
        <div className="anim anim-delay-1" style={styles.tag}>
          <span className="pulse-dot" />
          Available for new opportunities
        </div>
        <h1 className="anim anim-delay-2" style={styles.name}>
          Basim<br /><span style={styles.nameAccent}>Afzal</span>
        </h1>
        <p className="anim anim-delay-3" style={styles.sub}>
          Full Stack Software Engineer crafting scalable web &amp; mobile
          applications. Nearly 2 years building production-grade MERN/PERN
          &amp; Flutter solutions.
        </p>
        <div className="anim anim-delay-4 hero-btns" style={styles.btns}>
          <a href="/Basim_Afzal_CV.pdf" download="Basim_Afzal_CV.pdf" style={{ textDecoration: "none" }}>
            <button style={styles.btnLarge} className="btn-primary">↓ Download CV</button>
          </a>
          <button style={styles.btnOutlineLarge} className="btn-outline" onClick={() => onScrollTo("contact")}>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
