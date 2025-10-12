"use client";

import { useState } from "react";
import ClientWrapper from "./client-wrapper";
import Navbar from "./componentes/NavBar";
import HomePage from "./componentes/HomePage";
import Sobre from "./componentes/Sobre";
import Projetos from "./componentes/Projetos";
import Skills from "./componentes/Skills";
import Contato from "./componentes/Contato";



export default function Home() {
  const [changeNavBar, setChangeNavBar] = useState("home");

  const pages = {
    'home': <HomePage/>,
    'sobre': <Sobre/>,
    'projetos': <Projetos/>,
    'skills': <Skills/>,
    'contato': <Contato/>
  };

  return (
    <ClientWrapper>
      <div className="relative z-10 flex flex-col items-center justify-center w-screen h-screen space-y-5 lg:space-y-15">
        <Navbar changeNavBar={changeNavBar} setChangeNavBar={setChangeNavBar} />
        {pages[changeNavBar]}
      </div>
    </ClientWrapper>
  );
}
