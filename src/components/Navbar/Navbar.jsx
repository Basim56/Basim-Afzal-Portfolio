import { useState } from "react";
import { colors } from "../../styles/theme";
import { navItems } from "../../data/portfolioData";

const styles = {
  nav: {
    position:       "fixed",
    top:            0,
    left:           0,
    right:          0,
    zIndex:         50,
    background:     "rgba(7, 11, 20, 0.92)",
    backdropFilter: "blur(12px)",
    borderBottom:   "1px solid rgba(255,255,255,0.06)",
    padding:        "0 5%",
  },
  inner: {
    display:        "flex",
    alignItems:     "center",
    justifyContent: "space-between",
    maxWidth:       1100,
    margin:         "0 auto",
    height:         64,
  },
  logo: {
    fontFamily:    "'Syne', sans-serif",
    fontWeight:    800,
    fontSize:      20,
    color:         "#fff",
    letterSpacing: "-0.03em",
    cursor:        "pointer",
    background:    "none",
    border:        "none",
  },
  logoAccent: { color: colors.accent },
  desktopLinks: {
    display:    "flex",
    gap:        32,
    alignItems: "center",
  },
  navLink: (active) => ({
    cursor:     "pointer",
    fontSize:   14,
    fontWeight: 500,
    color:      active ? colors.accent : "#94a3b8",
    transition: "color 0.2s",
    background: "none",
    border:     "none",
    padding:    0,
  }),
  cvBtn: {
    background:    `linear-gradient(135deg, ${colors.accent}, ${colors.sky})`,
    color:         colors.bg,
    border:        "none",
    borderRadius:  8,
    padding:       "10px 22px",
    fontWeight:    700,
    fontSize:      14,
    cursor:        "pointer",
    letterSpacing: "0.01em",
    transition:    "opacity 0.2s, transform 0.2s",
    whiteSpace:    "nowrap",
  },
  drawerCvBtn: {
    marginTop:     8,
    width:         "100%",
    background:    `linear-gradient(135deg, ${colors.accent}, ${colors.sky})`,
    color:         colors.bg,
    border:        "none",
    borderRadius:  10,
    padding:       "14px 0",
    fontWeight:    700,
    fontSize:      15,
    cursor:        "pointer",
    letterSpacing: "0.01em",
  },
  drawerLink: (active) => ({
    width:        "100%",
    textAlign:    "center",
    cursor:       "pointer",
    fontSize:     16,
    fontWeight:   500,
    color:        active ? colors.accent : "#94a3b8",
    background:   "none",
    border:       "none",
    padding:      "10px 0",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  }),
};

const barStyle = (open, idx) => {
  const base = {
    width: 24, height: 2, background: "#e2e8f0",
    borderRadius: 2, transition: "transform 0.3s, opacity 0.3s", display: "block",
  };
  if (open) {
    if (idx === 0) return { ...base, transform: "translateY(7px) rotate(45deg)" };
    if (idx === 1) return { ...base, opacity: 0 };
    if (idx === 2) return { ...base, transform: "translateY(-7px) rotate(-45deg)" };
  }
  return base;
};

const drawerStyle = (open) => ({
  position: "fixed", top: 64, left: 0, right: 0,
  background: "rgba(7,11,20,0.97)", backdropFilter: "blur(16px)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
  padding: open ? "24px 5% 32px" : "0 5%",
  maxHeight: open ? 500 : 0,
  overflow: "hidden",
  transition: "max-height 0.35s ease, padding 0.35s ease",
  zIndex: 49,
});

export default function Navbar({ activeSection, onScrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    onScrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.inner}>
          <button style={styles.logo} className="nav-link" onClick={() => handleNav("home")}>
            BA<span style={styles.logoAccent}>.</span>
          </button>

          {/* Desktop */}
          <div style={styles.desktopLinks} className="desktop-nav">
            {navItems.map((id) => (
              <button key={id} style={styles.navLink(activeSection === id)}
                className="nav-link" onClick={() => handleNav(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <a href="Basim_Afzal_CV.pdf" download="Basim_Afzal_CV.pdf" style={{ textDecoration: "none" }}>
              <button style={styles.cvBtn} className="btn-primary">Download CV</button>
            </a>
          </div>

          {/* Hamburger */}
          <button className="hamburger-btn" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu"
            style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 8 }}>
            <span style={barStyle(menuOpen, 0)} />
            <span style={barStyle(menuOpen, 1)} />
            <span style={barStyle(menuOpen, 2)} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div style={drawerStyle(menuOpen)}>
        {navItems.map((id) => (
          <button key={id} style={styles.drawerLink(activeSection === id)} onClick={() => handleNav(id)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        ))}
        <a href="Basim_Afzal_CV.pdf" download="Basim_Afzal_CV.pdf" style={{ textDecoration: "none", width: "100%" }}>
          <button style={styles.drawerCvBtn}>↓ Download CV</button>
        </a>
      </div>
    </>
  );
}
