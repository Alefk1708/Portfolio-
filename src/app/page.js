"use client";

import { useRef, useState } from "react";
import ClientWrapper from "./client-wrapper";
import Navbar from "./componentes/NavBar";
import HomePage from "./componentes/HomePage";
import Sobre from "./componentes/Sobre";
import Projetos from "./componentes/Projetos";
import Skills from "./componentes/Skills";
import Contato from "./componentes/Contato";

export default function Home() {
  const [changeNavBar, setChangeNavBar] = useState("home");
  const mainRef = useRef(null);

  const navigate = (page) => {
    setChangeNavBar(page);
    mainRef.current?.scrollTo({ top: 0 });
  };

  const pages = {
    home: <HomePage onNavigate={navigate} />,
    sobre: <Sobre />,
    projetos: <Projetos />,
    skills: <Skills />,
    contato: <Contato />,
  };

  return (
    <ClientWrapper>
      <div className="portfolio-shell">
        <Navbar changeNavBar={changeNavBar} setChangeNavBar={navigate} />
        <main ref={mainRef} className="site-main custom-scrollbar" tabIndex={-1}>
          <div className="page-transition" key={changeNavBar}>
            {pages[changeNavBar]}
          </div>
        </main>
      </div>
    </ClientWrapper>
  );
}
