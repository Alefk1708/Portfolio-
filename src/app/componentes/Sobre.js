import AnimatedContent from "../animations/AnimatedContent";


function Sobre() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={false}
        duration={1.2}
        initialOpacity={0}
        animateOpacity={true}
        scale={1}
        threshold={0.2}
        delay={0.3}
      >
        <div className="flex items-center justify-center">
          <div className="hidden lg:flex flex-col gap-6 p-14 absolute w-[59rem] h-[25rem] mt-8 bg-[#ffffff13] rounded-4xl scroll-mb-6 overflow-y-auto scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-gray-500 scrollbar-track-transparent">
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={true}
              duration={1.2}
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.2}
              delay={0.6}
            >
              <div>
                <h1 className="text-white text-3xl">SOBRE MIM</h1>
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
              delay={1}
            >
              <div className="space-y-5">
                <p className="text-white text-[1rem]">
                  Sou Kaique Alef Mendes Cardoso, Desenvolvedor Full-Stack
                  Júnior com forte paixão por tecnologia, aprendizado contínuo e
                  construção de soluções inteligentes. Natural de Brasília de
                  Minas/MG, iniciei minha jornada no desenvolvimento com foco
                  tanto em front-end quanto em back-end, sempre buscando unir
                  estética, performance e funcionalidade em cada projeto.
                </p>

                <p className="text-white text-[1rem]">
                  Meu background inclui sólida experiência com HTML5, CSS3,
                  JavaScript, Node.js, Python e bancos de dados NoSQL.
                  Recentemente, desenvolvi um sistema completo de convite de
                  casamento, integrando front-end, back-end e banco de dados com
                  tecnologias modernas como Node.js, MongoDB Atlas e APIs
                  hospedadas no Heroku — um projeto independente que evidencia
                  minha capacidade de transformar ideias em produtos funcionais.
                </p>
                <p className="text-white text-[1rem]">
                  Tenho formação técnica complementar pelo IFRS, onde aprofundei
                  conhecimentos em JavaScript, HTML5 e CSS3, e sigo ampliando
                  minhas habilidades com frameworks como React e Tailwind CSS.
                  Valorizo boas práticas de código, clareza na comunicação e a
                  capacidade de aprender rapidamente em ambientes dinâmicos.
                </p>
                <p className="text-white text-[1rem]">
                  Estou em constante evolução, sempre aberto a novos desafios e
                  oportunidades que me permitam contribuir, crescer e impactar
                  positivamente o ecossistema de desenvolvimento web.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </AnimatedContent>

      <div className="lg:hidden flex flex-col gap-4 bg-[#ffffff13] p-6 rounded-4xl scroll-mb-6 overflow-y-auto w-[93%] h-[80%] mt-17 ">
        <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={true}
              duration={1.2}
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.2}
              delay={0.6}
            >
              <div>
                <h1 className="text-white text-3xl">SOBRE MIM</h1>
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
              delay={1}
            >
              <div className="space-y-5">
                <p className="text-white text-[1rem]">
                  Sou Kaique Alef Mendes Cardoso, Desenvolvedor Full-Stack
                  Júnior com forte paixão por tecnologia, aprendizado contínuo e
                  construção de soluções inteligentes. Natural de Brasília de
                  Minas/MG, iniciei minha jornada no desenvolvimento com foco
                  tanto em front-end quanto em back-end, sempre buscando unir
                  estética, performance e funcionalidade em cada projeto.
                </p>

                <p className="text-white text-[1rem]">
                  Meu background inclui sólida experiência com HTML5, CSS3,
                  JavaScript, Node.js, Python e bancos de dados NoSQL.
                  Recentemente, desenvolvi um sistema completo de convite de
                  casamento, integrando front-end, back-end e banco de dados com
                  tecnologias modernas como Node.js, MongoDB Atlas e APIs
                  hospedadas no Heroku — um projeto independente que evidencia
                  minha capacidade de transformar ideias em produtos funcionais.
                </p>
                <p className="text-white text-[1rem]">
                  Tenho formação técnica complementar pelo IFRS, onde aprofundei
                  conhecimentos em JavaScript, HTML5 e CSS3, e sigo ampliando
                  minhas habilidades com frameworks como React e Tailwind CSS.
                  Valorizo boas práticas de código, clareza na comunicação e a
                  capacidade de aprender rapidamente em ambientes dinâmicos.
                </p>
                <p className="text-white text-[1rem]">
                  Estou em constante evolução, sempre aberto a novos desafios e
                  oportunidades que me permitam contribuir, crescer e impactar
                  positivamente o ecossistema de desenvolvimento web.
                </p>
              </div>
            </AnimatedContent>
      </div>
    </div>
  );
}

export default Sobre;
