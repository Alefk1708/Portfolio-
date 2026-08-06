import { useEffect, useState } from "react";
import { ExternalLink, Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  ["sobre", "Sobre"],
  ["projetos", "Projetos"],
  ["skills", "Skills"],
  ["contato", "Contato"],
];

export default function Navbar({ changeNavBar, setChangeNavBar }) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme || "dark";
    setTheme(currentTheme);
  }, []);

  const navigate = (page) => {
    setChangeNavBar(page);
    setIsOpen(false);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // O tema continua funcionando mesmo se o armazenamento estiver bloqueado.
    }
  };

  return (
    <nav className="site-nav" aria-label="Navegação principal">
      <div className="nav-inner">
        <button
          type="button"
          className={`brand-button ${changeNavBar === "home" ? "is-active" : ""}`}
          onClick={() => navigate("home")}
          aria-label="Ir para o início"
        >
          <span>KA</span>
        </button>

        <div className="desktop-nav">
          {navItems.map(([page, label]) => (
            <button
              type="button"
              key={page}
              className={`nav-link ${changeNavBar === page ? "is-active" : ""}`}
              onClick={() => navigate(page)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
            title={theme === "dark" ? "Modo claro" : "Modo escuro"}
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <a
            className="follow-link"
            href="https://www.linkedin.com/in/kaique-alef-a86450207"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ExternalLink size={15} aria-hidden="true" />
          </a>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-nav" id="mobile-navigation">
          {navItems.map(([page, label]) => (
            <button
              type="button"
              key={page}
              className={changeNavBar === page ? "is-active" : ""}
              onClick={() => navigate(page)}
            >
              {label}
            </button>
          ))}
          <a
            href="https://www.linkedin.com/in/kaique-alef-a86450207"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
      )}
    </nav>
  );
}
