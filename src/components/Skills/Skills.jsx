import { S, colors } from "../../styles/theme";
import { skills } from "../../data/portfolioData";

/* one color per skill category */
const CATEGORY_COLORS = [
  colors.accent,
  colors.blue,
  colors.purple,
  colors.amber,
  colors.green,
];

const styles = {
  wrap: { display: "flex", flexWrap: "wrap" },
  category: { marginBottom: 32 },
  catLabel: {
    fontSize:      12,
    fontWeight:    700,
    letterSpacing: "0.12em",
    color:         colors.faint,
    textTransform: "uppercase",
    marginBottom:  12,
  },
  badge: (c) => ({
    display:      "inline-flex",
    alignItems:   "center",
    background:   c + "15",
    color:        c,
    border:       `1px solid ${c}30`,
    borderRadius: 8,
    padding:      "5px 12px",
    fontSize:     13,
    fontWeight:   500,
    margin:       "4px 6px 4px 0",
  }),
};

export default function Skills() {
  return (
    <section id="skills">
      <div style={S.section}>
        {/* header */}
        <div style={S.sectionLabel}>
          <div style={S.dot(colors.blue)} />
          <span style={S.labelText(colors.blue)}>Technical Skills</span>
        </div>
        <h2 style={S.h2}>Tech Stack</h2>
        <div style={S.divider(colors.blue)} />

        {/* grid */}
        <div style={S.card}>
          {Object.entries(skills).map(([category, items], idx) => {
            const c = CATEGORY_COLORS[idx % CATEGORY_COLORS.length];
            return (
              <div key={category} style={styles.category}>
                <div style={styles.catLabel}>{category}</div>
                <div style={styles.wrap}>
                  {items.map((skill) => (
                    <span key={skill} style={styles.badge(c)}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
