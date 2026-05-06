import { colors } from "../../styles/theme";

const styles = {
  footer: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    padding:   "32px 5%",
    textAlign: "center",
    color:     "#334155",
    fontSize:  13,
  },
  strong: { color: colors.text },
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={styles.footer}>
      <p>
        Designed &amp; Built by{" "}
        <strong style={styles.strong}>Basim Afzal</strong> ·
        Full Stack Software Engineer · Karachi, Pakistan · {year}
      </p>
    </footer>
  );
}
