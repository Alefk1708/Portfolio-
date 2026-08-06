import Image from "next/image";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    href: "mailto:kaiquealef42@gmail.com",
    label: "Enviar e-mail",
    Icon: Mail,
  },
  {
    href: "https://github.com/Alefk1708",
    label: "GitHub",
    Icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/kaique-alef-a86450207",
    label: "LinkedIn",
    Icon: Linkedin,
  },
];

export default function HomePage({ onNavigate }) {
  return (
    <section className="home-page" aria-labelledby="home-title">
      <div className="home-layout">
        <div className="home-copy">
          <span className="availability-pill">
            <span aria-hidden="true" /> Desenvolvedor Full Stack
          </span>

          <p className="home-kicker">Olá, meu nome é</p>
          <h1 id="home-title">
            KAIQUE <span>ALEF</span>
          </h1>
          <p className="home-role">Web • Mobile • Games • IA aplicada</p>
          <p className="home-summary">
            Transformo ideias em produtos completos — de interfaces modernas e
            APIs a aplicativos, ferramentas desktop e experiências em Godot.
          </p>

          <div className="home-actions">
            <button className="button button-primary" type="button" onClick={() => onNavigate("projetos")}>
              Ver projetos <ArrowUpRight size={18} aria-hidden="true" />
            </button>
            <a
              className="button button-secondary"
              href="https://drive.google.com/file/d/1OhcpimRgWaw_Sjl1bDO_YA-dciehcIQZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} aria-hidden="true" /> Baixar CV
            </a>
          </div>

          <div className="social-links" aria-label="Redes e contato">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                href={href}
                key={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                title={label}
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="profile-wrap">
          <div className="profile-halo" aria-hidden="true" />
          <Image
            src="/assets/Yoriichi-Perfil.png"
            alt="Kaique Alef"
            width={675}
            height={675}
            priority
            sizes="(max-width: 720px) 220px, 360px"
            className="profile-image"
          />
          <div className="profile-caption">
            <strong>16</strong>
            <span>projetos públicos atuais</span>
          </div>
        </div>
      </div>
    </section>
  );
}
