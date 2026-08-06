const skillGroups = [
  {
    title: "Linguagens",
    description: "Base usada nos projetos web, APIs, desktop e games.",
    skills: [
      ["JavaScript", "JS"],
      ["TypeScript", "TS"],
      ["Python", "PY"],
      ["C#", "C#"],
      ["GDScript", "GD"],
      ["HTML5", "<>"],
      ["CSS3", "CSS"],
      ["SQL", "SQL"],
    ],
  },
  {
    title: "Front-end & Mobile",
    description: "Interfaces responsivas para web e aplicativos.",
    skills: [
      ["React", "RE"],
      ["Next.js", "NX"],
      ["Vue.js", "VU"],
      ["Tailwind CSS", "TW"],
      ["React Native", "RN"],
      ["Expo", "EX"],
      ["NativeWind", "NW"],
    ],
  },
  {
    title: "Back-end & Dados",
    description: "APIs, autenticação, tempo real e persistência.",
    skills: [
      ["Node.js", "ND"],
      ["Express.js", "ES"],
      ["FastAPI", "FA"],
      ["ASP.NET Core", ".N"],
      ["REST APIs", "API"],
      ["WebSockets", "WS"],
      ["JWT & 2FA", "JWT"],
      ["PostgreSQL", "PG"],
      ["SQL Server", "SQL"],
      ["MongoDB", "MG"],
      ["SQLAlchemy", "SA"],
      ["Entity Framework", "EF"],
    ],
  },
  {
    title: "Games, IA & 3D",
    description: "Tecnologias que aparecem nos projetos mais recentes.",
    skills: [
      ["Godot 4", "GO"],
      ["Photon Fusion", "PH"],
      ["Google Gemini", "AI"],
      ["ML.NET", "ML"],
      ["Hunyuan3D 2.1", "3D"],
      ["PyTorch / Diffusers", "PT"],
      ["Hugging Face", "HF"],
      ["Modly", "MO"],
    ],
  },
  {
    title: "Ferramentas & Plataforma",
    description: "Ferramentas de desenvolvimento, integração e entrega.",
    skills: [
      ["Git", "GT"],
      ["GitHub", "GH"],
      ["Swagger / OpenAPI", "OA"],
      ["Cloudinary", "CL"],
      ["WPF / Windows", "WP"],
      ["CUDA / GPU Offload", "CU"],
    ],
  },
];

export default function Skills() {
  const totalSkills = skillGroups.reduce((total, group) => total + group.skills.length, 0);

  return (
    <section className="section-page" aria-labelledby="skills-title">
      <div className="section-container skills-container">
        <header className="section-heading">
          <span className="eyebrow">STACK EM USO</span>
          <h1 id="skills-title">Skills & ferramentas</h1>
          <p>
            Stack consolidada a partir dos projetos atuais — web, mobile,
            desktop, games, dados e inteligência artificial.
          </p>
        </header>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <div className="skill-group-heading">
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>
              <div className="skill-list">
                {group.skills.map(([label, short]) => (
                  <div className="skill-pill" key={label}>
                    <span className="skill-mark" aria-hidden="true">{short}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="section-note">{totalSkills} tecnologias e ferramentas organizadas por área</p>
      </div>
    </section>
  );
}
