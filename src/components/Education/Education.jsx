import { S, colors } from "../../styles/theme";
import { education } from "../../data/portfolioData";

const styles = {
  card: {
    ...S.card, display: "flex", justifyContent: "space-between",
    alignItems: "flex-start", flexWrap: "wrap", gap: 20,
  },
  title:  { fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 0 4px" },
  degree: { fontSize: 14, color: colors.muted, marginBottom: 16 },
  honorBadge: {
    display: "inline-flex", gap: 6, alignItems: "center",
    background: "rgba(251,191,36,0.08)", color: "#fbbf24",
    border: "1px solid rgba(251,191,36,0.2)", borderRadius: 8,
    padding: "4px 12px", fontSize: 12, fontWeight: 600,
    marginRight: 8, marginBottom: 8,
  },
  dateBox: {
    background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)",
    borderRadius: 12, padding: "16px 24px", textAlign: "right", flexShrink: 0,
  },
  dateLabel: { fontSize: 12, color: colors.faint, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" },
  dateValue: { fontSize: 20, fontWeight: 700, color: colors.green, fontFamily: "'Syne', sans-serif" },
  dateSep:   { fontSize: 12, color: colors.faint, margin: "2px 0" },
};

export default function Education() {
  return (
    <section id="education">
      <div style={S.section}>
        <div style={S.sectionLabel}>
          <div style={S.dot(colors.green)} />
          <span style={S.labelText(colors.green)}>Education</span>
        </div>
        <h2 style={S.h2}>Academic Background</h2>
        <div style={S.divider(colors.green)} />

        <div style={styles.card} className="edu-card">
          <div>
            <h3 style={styles.title}>{education.university}</h3>
            <div style={styles.degree}>{education.degree} · {education.location}</div>
            <div>
              {education.honors.map((h) => (
                <span key={h} style={styles.honorBadge}>🏆 {h}</span>
              ))}
            </div>
          </div>
          <div style={styles.dateBox} className="edu-date-box">
            <div style={styles.dateLabel}>Duration</div>
            <div style={styles.dateValue}>{education.from}</div>
            <div style={styles.dateSep}>to</div>
            <div style={styles.dateValue}>{education.to}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
