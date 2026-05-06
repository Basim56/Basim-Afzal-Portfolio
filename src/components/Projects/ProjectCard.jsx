import { S } from "../../styles/theme";

const styles = {
  card: (color) => ({
    background:    "#0f1825",
    border:        "1px solid rgba(255,255,255,0.07)",
    borderRadius:  16,
    padding:       28,
    transition:    "border-color 0.3s, transform 0.3s",
    cursor:        "default",
    position:      "relative",
    overflow:      "hidden",
  }),
  accent: (color) => ({
    position:     "absolute",
    top:          0,
    left:         0,
    right:        0,
    height:       3,
    background:   color,
    borderRadius: "16px 16px 0 0",
  }),
  icon: {
    fontSize:     32,
    marginBottom: 12,
    display:      "block",
  },
  name: {
    fontFamily:    "'Syne', sans-serif",
    fontSize:      18,
    fontWeight:    700,
    color:         "#fff",
    margin:        "0 0 4px",
  },
  sub: {
    fontSize:     13,
    color:        "#64748b",
    marginBottom: 16,
  },
  pill: (c) => ({
    display:      "inline-block",
    background:   c + "12",
    color:        c,
    border:       `1px solid ${c}25`,
    borderRadius: 6,
    padding:      "2px 10px",
    fontSize:     11,
    fontWeight:   600,
    marginRight:  6,
    marginBottom: 6,
  }),
  pillsRow: { marginBottom: 16 },
};

export default function ProjectCard({ project }) {
  const { name, sub, stack, color, icon, bullets } = project;

  return (
    <div style={styles.card(color)} className="proj-card">
      <div style={styles.accent(color)} />

      <span style={styles.icon}>{icon}</span>
      <h3 style={styles.name}>{name}</h3>
      <div style={styles.sub}>{sub}</div>

      <div style={styles.pillsRow}>
        {stack.map((t) => (
          <span key={t} style={styles.pill(color)}>
            {t}
          </span>
        ))}
      </div>

      {bullets.map((b, i) => (
        <div key={i} style={S.bullet}>
          <div style={S.bulletDot(color)} />
          <span>{b}</span>
        </div>
      ))}
    </div>
  );
}
