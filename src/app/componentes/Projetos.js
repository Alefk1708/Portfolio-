import { useMemo, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import items from "../data/Items";

const filters = ["Todos", "Full Stack", "Web", "Mobile", "Desktop", "Games", "IA & 3D"];

export default function Projetos() {
  const [filter, setFilter] = useState("Todos");

  const visibleProjects = useMemo(
    () =>
      filter === "Todos"
        ? items
        : items.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <section className="section-page" aria-labelledby="projects-title">
      <div className="section-container projects-container">
        <header className="section-heading">
          <span className="eyebrow">PORTFÓLIO ATUAL</span>
          <h1 id="projects-title">Projetos</h1>
          <p>
            Do front-end a jogos e IA 3D: os projetos públicos que mantenho hoje
            no GitHub, reunidos em um só lugar.
          </p>
        </header>

        <div className="filter-strip custom-scrollbar" aria-label="Filtrar projetos">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              className={`filter-chip ${filter === item ? "is-active" : ""}`}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-visual">
                {project.img ? (
                  <Image
                    src={project.img}
                    alt={`Prévia do projeto ${project.title}`}
                    fill
                    sizes="(max-width: 720px) 92vw, (max-width: 1180px) 45vw, 360px"
                    className="project-image"
                  />
                ) : (
                  <div className="project-placeholder" aria-hidden="true">
                    <span>{project.mark}</span>
                  </div>
                )}
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-body">
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="project-tags" aria-label="Tecnologias">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link-primary"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      {project.demoLabel || "Ver projeto"}
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={16} aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="section-note">
          {visibleProjects.length} {visibleProjects.length === 1 ? "projeto" : "projetos"} nesta categoria
        </p>
      </div>
    </section>
  );
}
