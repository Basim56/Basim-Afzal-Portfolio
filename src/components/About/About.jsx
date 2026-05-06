import { S, colors } from "../../styles/theme";

export default function About() {
  return (
    <section id="about">
      <div style={S.section}>
        {/* header */}
        <div style={S.sectionLabel}>
          <div style={S.dot()} />
          <span style={S.labelText()}>About me</span>
        </div>
        <h2 style={S.h2}>Professional Summary</h2>
        <div style={S.divider()} />

        {/* body */}
        <div style={S.card}>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: colors.muted, margin: 0 }}>
            Full Stack Software Engineer with nearly{" "}
            <strong style={{ color: colors.text }}>
              2 years of professional experience
            </strong>{" "}
            building and optimizing scalable web and mobile applications using
            JavaScript-based stacks{" "}
            <strong style={{ color: colors.accent }}>(MERN/PERN)</strong>.
            Proficient in{" "}
            <strong style={{ color: colors.text }}>
              React, Node.js, Express, PostgreSQL, MongoDB, and Flutter
            </strong>
            , with hands-on experience delivering end-to-end features across
            B2B and B2B2C platforms. Skilled in REST API development, CI/CD
            pipelines, clean architecture, and cross-functional collaboration.
            Demonstrated track record of improving system performance and
            delivering production-grade software.
          </p>
        </div>
      </div>
    </section>
  );
}
