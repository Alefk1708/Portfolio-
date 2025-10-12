import { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones minimalistas
import AnimatedContent from "../animations/AnimatedContent";
import Image from "next/image";

export default function Navbar({ changeNavBar, setChangeNavBar }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" shadow-md absolute top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between lg:justify-around items-center h-16 mt-6">
          {/* Logo */}
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1.2}
            initialOpacity={0}
            animateOpacity={true}
            scale={1.1}
            threshold={0.2}
            delay={0.2}
          >
            <div
              className={`${
                changeNavBar == "home" ? " border-b-4 border-red-700" : ""
              }`}
            >
              <button onClick={() => setChangeNavBar("home")}>
                <Image
                  width={40}
                  height={40}
                  src="/assets/casa.png"
                  alt="Logo"
                />
              </button>
            </div>
          </AnimatedContent>

          {/* Botão "SIGA-ME Mobile" */}
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1.2}
            initialOpacity={0}
            animateOpacity={true}
            scale={1.1}
            threshold={0.2}
            delay={0.4}
          >
            <div>
              <a
                href="https://www.linkedin.com/in/kaique-alef-a86450207"
                target="_blank"
                className=" lg:hidden lg:text-2xl text-white rounded-3xl px-2  border-3 border-[#9f0000]  "
              >
                SIGA-ME
              </a>
            </div>
          </AnimatedContent>

          {/* Ícone de menu no mobile */}
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1.2}
            initialOpacity={0}
            animateOpacity={true}
            scale={1.1}
            threshold={0.2}
            delay={0.6}
          >
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </AnimatedContent>

          {/* Links (desktop) */}

          <div className="hidden lg:flex space-x-30 justify-around  items-center">
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={1.2}
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.2}
              delay={0.6}
            >
              <div
                className={`${
                  changeNavBar == "sobre" ? " border-b-4 border-red-700" : ""
                }`}
              >
                <button
                  onClick={() => setChangeNavBar("sobre")}
                  className="text-2xl text-white py-2"
                >
                  SOBRE
                </button>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={1.2}
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.2}
              delay={1}
            >
              <div
                className={`${
                  changeNavBar == "projetos" ? " border-b-4 border-red-700" : ""
                }`}
              >
                <button
                  onClick={() => setChangeNavBar("projetos")}
                  className="text-2xl text-white py-2"
                >
                  PROJETOS
                </button>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={1.2}
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.2}
              delay={1.4}
            >
              <div
                className={`${
                  changeNavBar == "skills" ? " border-b-4 border-red-700" : ""
                }`}
              >
                <button
                  onClick={() => setChangeNavBar("skills")}
                  className="text-2xl text-white py-2"
                >
                  SKILLS
                </button>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={1.2}
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.2}
              delay={1.8}
            >
              <div
                className={`${
                  changeNavBar == "contato" ? " border-b-4 border-red-700" : ""
                }`}
              >
                <button
                  onClick={() => setChangeNavBar("contato")}
                  className="text-2xl text-white py-2"
                >
                  CONTATO
                </button>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={50}
              direction="horizontal"
              reverse={true}
              duration={1.2}
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.2}
              delay={2.1}
            >
              <div>
                <a
                  href="https://www.linkedin.com/in/kaique-alef-a86450207"
                  target="_blank"
                  className="text-2xl text-white rounded-3xl px-8 py-1 border-3 border-[#9f0000]"
                >
                  SIGA-ME
                </a>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={true}
          duration={1.2}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.2}
          delay={0.1}
        >
          <div className="lg:hidden flex justify-center">
            <div className="lg:hidden bg-[#00000063] w-[50%] border-1 border-[#ffffff42] rounded-3xl backdrop-blur-xs px-4 pt-2 pb-4 space-y-2 shadow flex flex-col text-center">
              <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={true}
                duration={1.2}
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.2}
                delay={0.5}
              >
                <div>
                  <button
                    onClick={() => setChangeNavBar("sobre")}
                    className="text-2xl text-white"
                  >
                    SOBRE
                  </button>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={true}
                duration={1.2}
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.2}
                delay={0.7}
              >
                <div>
                  <button
                    onClick={() => setChangeNavBar("projetos")}
                    className="text-2xl text-white"
                  >
                    PROJETOS
                  </button>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={true}
                duration={1.2}
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.2}
                delay={0.9}
              >
                <div>
                  <button
                    onClick={() => setChangeNavBar("skills")}
                    className="text-2xl text-white"
                  >
                    SKILLS
                  </button>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={true}
                duration={1.2}
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.2}
                delay={1.1}
              >
                <div>
                  <button
                    onClick={() => setChangeNavBar("contato")}
                    className="text-2xl text-white"
                  >
                    CONTATO
                  </button>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </AnimatedContent>
      )}
    </nav>
  );
}
