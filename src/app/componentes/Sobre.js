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
                  Olá! Sou Kaique Alef, um Desenvolvedor Full Stack de 20 anos,
                  apaixonado por transformar ideias em código. Com base em
                  Goiânia, atuo no desenvolvimento de aplicações Web e Mobile,
                  sempre buscando unir interfaces intuitivas a um back-end
                  robusto e eficiente.
                </p>

                <p className="text-white text-[1rem]">
                  Minha trajetória prática inclui a entrega de soluções reais,
                  como uma plataforma completa para gestão de casamentos e um
                  sistema de ponto eletrônico seguro com leitura de QR Code.
                  Esses projetos solidificaram minha experiência com React.js,
                  criação de APIs RESTful e integração com bancos de dados SQL e
                  NoSQL.
                </p>

                <p className="text-white text-[1rem]">
                  Além do domínio do ecossistema JavaScript (incluindo
                  TypeScript, Next.js e Vue.js), expando minhas capacidades
                  técnicas com Python (FastAPI) e desenvolvimento móvel usando
                  React Native. Minha formação é complementada por certificações
                  do IFRS e conhecimento em metodologias ágeis como Scrum.
                </p>

                <p className="text-white text-[1rem]">
                  Mais do que código, valorizo a comunicação clara e o trabalho
                  em equipe. Sou movido pela curiosidade e pela vontade de
                  resolver problemas complexos, buscando sempre oportunidades
                  onde possa colaborar, aprender e crescer profissionalmente.
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
              Olá! Sou Kaique Alef, um Desenvolvedor Full Stack de 20 anos,
              apaixonado por transformar ideias em código. Com base em Goiânia,
              atuo no desenvolvimento de aplicações Web e Mobile, sempre
              buscando unir interfaces intuitivas a um back-end robusto e
              eficiente.
            </p>

            <p className="text-white text-[1rem]">
              Minha trajetória prática inclui a entrega de soluções reais, como
              uma plataforma completa para gestão de casamentos e um sistema de
              ponto eletrônico seguro com leitura de QR Code. Esses projetos
              solidificaram minha experiência com React.js, criação de APIs
              RESTful e integração com bancos de dados SQL e NoSQL.
            </p>

            <p className="text-white text-[1rem]">
              Além do domínio do ecossistema JavaScript (incluindo TypeScript,
              Next.js e Vue.js), expando minhas capacidades técnicas com Python
              (FastAPI) e desenvolvimento móvel usando React Native. Minha
              formação é complementada por certificações do IFRS e conhecimento
              em metodologias ágeis como Scrum.
            </p>

            <p className="text-white text-[1rem]">
              Mais do que código, valorizo a comunicação clara e o trabalho em
              equipe. Sou movido pela curiosidade e pela vontade de resolver
              problemas complexos, buscando sempre oportunidades onde possa
              colaborar, aprender e crescer profissionalmente.
            </p>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
}

export default Sobre;