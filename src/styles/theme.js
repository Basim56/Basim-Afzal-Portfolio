/* ─── Color palette ─────────────────────────────────────────── */
export const colors = {
  bg:       "#070b14",
  surface:  "#0f1825",
  accent:   "#00e5c3",
  blue:     "#3b82f6",
  purple:   "#a78bfa",
  amber:    "#f59e0b",
  green:    "#10b981",
  sky:      "#0ea5e9",
  text:     "#e2e8f0",
  muted:    "#94a3b8",
  faint:    "#64748b",
  border:   "rgba(255,255,255,0.07)",
};

/* ─── Reusable style objects ─────────────────────────────────── */
export const S = {
  /* layout */
  section: {
    maxWidth: 1100,
    margin:   "0 auto",
    padding:  "80px 5%",
  },

  /* section header */
  sectionLabel: {
    display:     "flex",
    alignItems:  "center",
    gap:         12,
    marginBottom: 16,
  },
  dot: (c = colors.accent) => ({
    width:        8,
    height:       8,
    borderRadius: "50%",
    background:   c,
    flexShrink:   0,
  }),
  labelText: (c = colors.accent) => ({
    fontSize:      12,
    fontWeight:    700,
    letterSpacing: "0.15em",
    color:         c,
    textTransform: "uppercase",
  }),
  h2: {
    fontFamily:    "'Syne', sans-serif",
    fontSize:      "clamp(28px, 4vw, 40px)",
    fontWeight:    800,
    color:         "#fff",
    letterSpacing: "-0.03em",
    margin:        "0 0 8px",
  },
  divider: (c = colors.accent) => ({
    width:        48,
    height:       3,
    background:   `linear-gradient(90deg, ${c}, transparent)`,
    borderRadius: 2,
    margin:       "16px 0 48px",
  }),

  /* cards */
  card: {
    background:   colors.surface,
    border:       `1px solid ${colors.border}`,
    borderRadius: 16,
    padding:      32,
  },

  /* buttons */
  btnPrimary: {
    background:    "linear-gradient(135deg, #00e5c3, #0ea5e9)",
    color:         "#070b14",
    border:        "none",
    borderRadius:  8,
    padding:       "10px 22px",
    fontWeight:    700,
    fontSize:      14,
    cursor:        "pointer",
    letterSpacing: "0.01em",
    transition:    "opacity 0.2s, transform 0.2s",
  },
  btnOutline: {
    background:   "transparent",
    color:        colors.accent,
    border:       `1px solid ${colors.accent}`,
    borderRadius: 8,
    padding:      "10px 22px",
    fontWeight:   600,
    fontSize:     14,
    cursor:       "pointer",
    transition:   "background 0.2s",
  },

  /* bullet row */
  bullet: {
    display:     "flex",
    alignItems:  "flex-start",
    gap:         8,
    marginBottom: 8,
    fontSize:    14,
    color:       colors.muted,
  },
  bulletDot: (c = colors.accent) => ({
    width:        5,
    height:       5,
    borderRadius: "50%",
    background:   c,
    marginTop:    8,
    flexShrink:   0,
  }),
};
