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
                  Júnior com foco em React, Node.js e MongoDB. Tenho 20 anos e
                  sou de Goiânia, Goiás. Sou movido pela curiosidade e
                  pela vontade de aprender sempre, buscando evoluir em cada
                  projeto com soluções criativas, eficientes e bem estruturadas.
                </p>

                <p className="text-white text-[1rem]">
                  Tenho experiência prática no desenvolvimento de aplicações web
                  completas, incluindo front-end, back-end e banco de dados.
                  Entre meus projetos, destaco o sistema de ponto com QR Code —
                  desenvolvido com React, integração a API REST, autenticação
                  segura e armazenamento em MongoDB — e um site de convite de
                  casamento digital, com formulário conectado a banco de dados e
                  painel de visualização em tempo real.
                </p>

                <p className="text-white text-[1rem]">
                  Minha base técnica inclui HTML5, CSS3, JavaScript, TypeScript,
                  React.js, Node.js, Express.js, Tailwind CSS, MongoDB e GitHub.
                  Também possuo certificações pelo IFRS nas áreas de
                  desenvolvimento web e metodologia ágil (Scrum), o que me ajuda
                  a manter organização e colaboração eficaz em equipe.
                </p>

                <p className="text-white text-[1rem]">
                  Sou uma pessoa adaptável, comunicativa e focada em resultados.
                  Tenho facilidade em aprender novas tecnologias e gosto de
                  enfrentar desafios que me tirem da zona de conforto. Estou em
                  busca de oportunidades para crescer profissionalmente e
                  contribuir com soluções reais e impactantes no desenvolvimento
                  web.
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
                  Júnior com foco em React, Node.js e MongoDB. Tenho 20 anos e
                  sou de Goiânia, Goiás. Sou movido pela curiosidade e
                  pela vontade de aprender sempre, buscando evoluir em cada
                  projeto com soluções criativas, eficientes e bem estruturadas.
                </p>

                <p className="text-white text-[1rem]">
                  Tenho experiência prática no desenvolvimento de aplicações web
                  completas, incluindo front-end, back-end e banco de dados.
                  Entre meus projetos, destaco o sistema de ponto com QR Code —
                  desenvolvido com React, integração a API REST, autenticação
                  segura e armazenamento em MongoDB — e um site de convite de
                  casamento digital, com formulário conectado a banco de dados e
                  painel de visualização em tempo real.
                </p>

                <p className="text-white text-[1rem]">
                  Minha base técnica inclui HTML5, CSS3, JavaScript, TypeScript,
                  React.js, Node.js, Express.js, Tailwind CSS, MongoDB e GitHub.
                  Também possuo certificações pelo IFRS nas áreas de
                  desenvolvimento web e metodologia ágil (Scrum), o que me ajuda
                  a manter organização e colaboração eficaz em equipe.
                </p>

                <p className="text-white text-[1rem]">
                  Sou uma pessoa adaptável, comunicativa e focada em resultados.
                  Tenho facilidade em aprender novas tecnologias e gosto de
                  enfrentar desafios que me tirem da zona de conforto. Estou em
                  busca de oportunidades para crescer profissionalmente e
                  contribuir com soluções reais e impactantes no desenvolvimento
                  web.
                </p>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
}

export default Sobre;
