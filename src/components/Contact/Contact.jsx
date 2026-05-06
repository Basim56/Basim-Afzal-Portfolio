import { S, colors } from "../../styles/theme";
import { contact } from "../../data/portfolioData";

const styles = {
  intro: {
    marginBottom: 32,
    fontSize: 16,
    color: colors.faint,
    maxWidth: 500,
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  link: {
    textDecoration: "none",
    width: "calc(33.333% - 16px)",
    maxWidth: 340,
    minWidth: 200,
  },
  card: {
    width: "100%",
    background: "#0f1825",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 12,
    padding: "20px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    transition: "border-color 0.2s",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.1em",
    color: colors.faint,
    textTransform: "uppercase",
  },
  value: {
    fontSize: 14,
    fontWeight: 500,
    color: colors.text,
  },
  cta: {
    marginTop: 48,
    display: "flex",
    justifyContent: "center",
  },
  btnLarge: {
    ...S.btnPrimary,
    fontSize: 16,
    padding: "14px 36px",
  },
};

export default function Contact() {
  return (
    <section id="contact">
      <div style={S.section}>
        <div style={S.sectionLabel}>
          <div style={S.dot(colors.sky)} />
          <span style={S.labelText(colors.sky)}>Contact</span>
        </div>
        <h2 style={S.h2}>Get in Touch</h2>
        <div style={S.divider(colors.sky)} />

        <p style={styles.intro}>
          I&apos;m open to new opportunities. Feel free to reach out via any
          channel below.
        </p>

        <div style={styles.grid} className="contact-grid">
          {contact.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
              style={styles.link} className="contact-grid-item">
              <div style={styles.card} className="contact-link">
                <div style={styles.label}>{c.label}</div>
                <div style={styles.value}>{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        <div style={styles.cta}>
          <a href="Basim_Afzal_CV.pdf" download="Basim_Afzal_CV.pdf" style={{ textDecoration: "none" }}>
            <button style={styles.btnLarge} className="btn-primary">
              ↓ Download Full CV (PDF)
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
