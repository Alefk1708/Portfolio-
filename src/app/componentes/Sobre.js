import { Bot, Code2, Gamepad2, MonitorSmartphone } from "lucide-react";

const focusAreas = [
  { Icon: Code2, title: "Full Stack", text: "Next.js, FastAPI, ASP.NET e bancos SQL/NoSQL" },
  { Icon: MonitorSmartphone, title: "Web & Mobile", text: "React, Vue, React Native, Expo e interfaces responsivas" },
  { Icon: Gamepad2, title: "Games", text: "Godot 4, GDScript e multiplayer com Photon Fusion" },
  { Icon: Bot, title: "IA & 3D", text: "Gemini, Hunyuan3D, PyTorch e otimização de GPU" },
];

export default function Sobre() {
  return (
    <section className="section-page" aria-labelledby="about-title">
      <div className="section-container about-container">
        <header className="section-heading">
          <span className="eyebrow">SOBRE MIM</span>
          <h1 id="about-title">Construindo além do front-end</h1>
          <p>
            Sou Kaique Alef, desenvolvedor Full Stack de Goiânia. Gosto de
            transformar problemas reais em produtos que funcionam de ponta a ponta.
          </p>
        </header>

        <div className="about-layout">
          <div className="about-copy panel">
            <p>
              Minha base começou no desenvolvimento web com JavaScript, React,
              Next.js e Vue.js, evoluindo para APIs e back-ends em Python/FastAPI
              e C#/.NET, autenticação, bancos relacionais e NoSQL e comunicação em
              tempo real.
            </p>
            <p>
              Hoje também desenvolvo para mobile com React Native/Expo, aplicações
              Windows em .NET e jogos com Godot. Em projetos recentes, venho
              trabalhando com IA aplicada, integração com Gemini e geração 3D com
              Hunyuan3D, incluindo otimizações para hardware com pouca VRAM.
            </p>
            <p>
              Valorizo código simples de manter, interfaces intuitivas e a prática
              de aprender construindo. Meu GitHub reúne desde utilitários pequenos
              até sistemas full-stack e projetos de maior escopo.
            </p>
          </div>

          <div className="focus-grid" aria-label="Áreas de atuação">
            {focusAreas.map(({ Icon, title, text }) => (
              <article className="focus-card" key={title}>
                <span className="focus-icon"><Icon size={20} aria-hidden="true" /></span>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
