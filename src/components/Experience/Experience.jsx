import { S, colors } from "../../styles/theme";
import { experience } from "../../data/portfolioData";

const styles = {
  card: { ...S.card, padding: 36 },
  header: {
    display: "flex", justifyContent: "space-between",
    alignItems: "flex-start", marginBottom: 24, flexWrap: "wrap", gap: 12,
  },
  title:   { fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", margin: 0 },
  company: { fontSize: 14, color: colors.purple, fontWeight: 600, margin: "4px 0 0" },
  badge: {
    background: "rgba(167,139,250,0.08)", color: colors.purple,
    border: "1px solid rgba(167,139,250,0.2)", borderRadius: 8,
    padding: "4px 14px", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap",
  },
};

export default function Experience() {
  return (
    <section id="experience">
      <div style={S.section}>
        <div style={S.sectionLabel}>
          <div style={S.dot(colors.purple)} />
          <span style={S.labelText(colors.purple)}>Experience</span>
        </div>
        <h2 style={S.h2}>Work History</h2>
        <div style={S.divider(colors.purple)} />

        <div style={styles.card}>
          <div style={styles.header} className="exp-header">
            <div>
              <h3 style={styles.title}>{experience.title}</h3>
              <div style={styles.company}>{experience.company} · {experience.location}</div>
            </div>
            <span style={styles.badge}>{experience.period}</span>
          </div>
          {experience.bullets.map((b, i) => (
            <div key={i} style={S.bullet}>
              <div style={S.bulletDot(colors.purple)} />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
