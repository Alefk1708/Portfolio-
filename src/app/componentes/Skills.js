import AnimatedContent from "../animations/AnimatedContent";
import Image from "next/image";

function Skills() {
  // Lista atualizada com todas as habilidades do seu currículo
  const skills = [
    // --- Front-end ---
    { src: "/assets/HTML5.png", label: "HTML", width: "w-16" },
    { src: "/assets/CSS3.png", label: "CSS", width: "w-16" },
    { src: "/assets/JavaScript.png", label: "JAVASCRIPT", width: "w-16" },
    { src: "/assets/TypeScript.png", label: "TYPESCRIPT", width: "w-16" }, // Adicionado
    { src: "/assets/React.png", label: "REACT", width: "w-16" },
    { src: "/assets/Next.png", label: "NEXT.JS", width: "w-16" }, // Adicionado
    { src: "/assets/Vue.png", label: "VUE.JS", width: "w-16" },   // Adicionado
    { src: "/assets/Tailwindcss.png", label: "TAILWIND", width: "w-16" },

    // --- Mobile ---
    { src: "/assets/ReactNative.png", label: "REACT NATIVE", width: "w-16" }, // Adicionado
    { src: "/assets/NativeWind.png", label: "NATIVEWIND", width: "w-16" },   // Adicionado

    // --- Back-end & Python ---
    { src: "/assets/Node.png", label: "NODE.JS", width: "w-16" },
    { src: "/assets/Express.png", label: "EXPRESS.JS", width: "w-16" },
    { src: "/assets/Python.png", label: "PYTHON", width: "w-16" },
    { src: "/assets/FastAPI.png", label: "FASTAPI", width: "w-16" }, // Adicionado
    { src: "/assets/Api-rest.png", label: "API REST", width: "w-16" },
    { src: "/assets/JWT.png", label: "JWT AUTH", width: "w-16" },    // Adicionado

    // --- Banco de Dados & Ferramentas ---
    { src: "/assets/SQL.png", label: "SQL", width: "w-16" },         // Adicionado
    { src: "/assets/MongoDB.png", label: "MONGODB", width: "w-16" },  // Adicionado
    { src: "/assets/Git.png", label: "GIT", width: "w-16" },          // Adicionado
    { src: "/assets/GitHub.png", label: "GITHUB", width: "w-16" },    // Adicionado
  ];

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center mt-20 overflow-x-hidden">
      {/* Título Principal */}
      <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={true}
        duration={1.2}
        initialOpacity={0}
        animateOpacity={true}
        scale={1}
        threshold={0.2}
        delay={0.4}
      >
        <div>
          <h1 className="hidden lg:flex text-white text-center text-3xl mb-23 mt-[2vh]">
            SKILLS
          </h1>
        </div>
      </AnimatedContent>

      {/* PC / Desktop View - Usando Grid Ajustado */}
      {/* Ajustei o grid-cols para 4 colunas para acomodar melhor a quantidade maior de itens */}
      <div className="hidden lg:grid grid-cols-4 gap-x-16 gap-y-12">
        {skills.map((skill, index) => (
          <AnimatedContent
            key={index}
            distance={50}
            direction="vertical"
            reverse={true}
            duration={1.2}
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.2}
            delay={0.2 + index * 0.1} // Delay ajustado para ser mais rápido com muitos itens
          >
            <div className="flex items-center justify-center relative w-[16rem]">
              <Image
                width={400}
                height={400}
                className={`${skill.width} h-16 absolute left-0 z-10`}
                src={skill.src}
                alt={`${skill.label} icon`}
              />

              <div className="bg-[#ffffff13] h-[3rem] w-[12rem] pl-8 flex items-center justify-center rounded-3xl ml-6">
                <h1 className="text-white text-xl text-center font-bold tracking-wider">
                  {skill.label}
                </h1>
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>

      {/* Título Mobile */}
      <AnimatedContent
        distance={50}
        direction="vertical"
        reverse={true}
        duration={1.2}
        initialOpacity={0}
        animateOpacity={true}
        scale={1}
        threshold={0.2}
        delay={0.4}
      >
        <div>
          <h1 className="lg:hidden text-white text-center text-3xl mt-17">
            SKILLS
          </h1>
        </div>
      </AnimatedContent>

      {/* Mobile View */}
      <div className="lg:hidden overflow-scroll scroll-mb-10 h-[70vh] w-[18rem] mt-7 mb-12 px-4">
        <div className="flex flex-col gap-6 pb-20">
            {skills.map((skill, index) => (
             <AnimatedContent
                key={index}
                distance={30}
                direction="horizontal"
                reverse={true}
                duration={0.8}
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.1}
                delay={index * 0.1} 
              >
              <div className="flex items-center h-16 relative">
                <Image
                  width={400}
                  height={400}
                  className="w-14 h-14 absolute left-0 z-10"
                  src={skill.src}
                  alt={`${skill.label} icon`}
                />
                <div className="bg-[#ffffff13] h-12 flex-1 pl-10 rounded-3xl ml-6 flex items-center justify-center">
                  <h1 className="text-white text-lg font-semibold text-center">
                    {skill.label}
                  </h1>
                </div>
              </div>
              </AnimatedContent>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;