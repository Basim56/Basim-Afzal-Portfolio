import { S, colors } from "../../styles/theme";
import { projects } from "../../data/portfolioData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <div style={S.section}>
        <div style={S.sectionLabel}>
          <div style={S.dot(colors.amber)} />
          <span style={S.labelText(colors.amber)}>Projects</span>
        </div>
        <h2 style={S.h2}>Key Projects</h2>
        <div style={S.divider(colors.amber)} />

        <div className="projects-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}>
          {projects.map((p) => <ProjectCard key={p.name} project={p} />)}
        </div>
      </div>
    </section>
  );
}
