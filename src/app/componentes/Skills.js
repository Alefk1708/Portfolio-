import AnimatedContent from "../animations/AnimatedContent";
import Image from "next/image";

function Skills() {
  const skills = [
    { src: "/assets/Express.png", label: "EXPRESS.JS" },
    { src: "/assets/Api-rest.png", label: "API REST" },
    { src: "/assets/Tailwindcss.png", label: "TAILWIND CSS" },
    { src: "/assets/React.png", label: "REACT" },
    { src: "/assets/JavaScript.png", label: "JAVASCRIPT" },
    { src: "/assets/Node.png", label: "NODE.JS" },
    { src: "/assets/HTML5.png", label: "HTML" },
    { src: "/assets/CSS3.png", label: "CSS" },
    { src: "/assets/Python.png", label: "PYTHON" },
  ];
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center mt-20">
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
          <h1 className="hidden lg:flex text-white text-center text-3xl mb-23">
            SKILLS
          </h1>
        </div>
      </AnimatedContent>

      {/* PC */}
      <div className="hidden lg:flex justify-around">
        <div className="flex gap-27">
          {/* div 3 items */}
          <div className="flex flex-col gap-15">
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={true}
              duration={1.2}
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.2}
              delay={0.8}
            >
              <div className="flex items-center justify-between">
                <Image
                  width={400}
                  height={400}
                  className="w-16 h-16 absolute"
                  src="/assets/HTML5.png"
                  alt="icon"
                />
                <div className="bg-[#ffffff13] h-[3rem] w-[12rem] p-2 rounded-3xl ml-7 ">
                  <h1 className="text-white text-2xl text-center">HTML</h1>
                </div>
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
              delay={1.2}
            >
              <div className="flex items-center justify-between">
                <Image
                  width={400}
                  height={400}
                  className="w-18 h-18 absolute"
                  src="/assets/CSS3.png"
                  alt="icon"
                />
                <div className="bg-[#ffffff13] h-[3rem] w-[12rem] p-2 rounded-3xl ml-7 ">
                  <h1 className="text-white text-2xl text-center">CSS</h1>
                </div>
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
              delay={1.6}
            >
              <div className="flex items-center justify-between">
                <Image
                  width={400}
                  height={400}
                  className="w-16 h-16 absolute"
                  src="/assets/Python.png"
                  alt="icon"
                />
                <div className="bg-[#ffffff13] h-[3rem] w-[12rem] p-2 rounded-3xl ml-7 ">
                  <h1 className="text-white text-2xl text-center">PYTHON</h1>
                </div>
              </div>
            </AnimatedContent>
          </div>

          {/* div 3 items */}
          <div className="flex flex-col gap-15">
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={true}
              duration={1.2}
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.2}
              delay={2.0}
            >
              <div className="flex items-center justify-between">
                <Image
                  width={400}
                  height={400}
                  className="w-16 h-16 absolute"
                  src="/assets/React.png"
                  alt="icon"
                />
                <div className="bg-[#ffffff13] h-[3rem] w-[12rem] p-2 rounded-3xl ml-7 ">
                  <h1 className="text-white text-2xl text-center">REACT</h1>
                </div>
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
              delay={2.4}
            >
              <div className="flex items-center justify-between">
                <Image
                  width={400}
                  height={400}
                  className="w-18 h-18 absolute"
                  src="/assets/JavaScript.png"
                  alt="icon"
                />
                <div className="bg-[#ffffff13] h-[3rem] w-[12rem] p-2 rounded-3xl ml-7 ">
                  <h1 className="text-white text-2xl text-center ">
                    <p className="ml-5">JAVASCRIPT</p>
                  </h1>
                </div>
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
              delay={2.8}
            >
              <div className="flex items-center justify-between">
                <Image
                  width={400}
                  height={400}
                  className="w-19 h-19 absolute"
                  src="/assets/Node.png"
                  alt="icon"
                />
                <div className="bg-[#ffffff13] h-[3rem] w-[12rem] p-2 rounded-3xl ml-7 ">
                  <h1 className="text-white text-2xl text-center">NODE.JS</h1>
                </div>
              </div>
            </AnimatedContent>
          </div>

          {/* div 3 items */}
          <div className="flex flex-col gap-15">
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={true}
              duration={1.2}
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.2}
              delay={3.2}
            >
              <div className="flex items-center justify-between">
                <Image
                  width={400}
                  height={400}
                  className="w-16 h-16 absolute"
                  src="/assets/Express.png"
                  alt="icon"
                />
                <div className="bg-[#ffffff13] h-[3rem] w-[12rem] p-2 rounded-3xl ml-7 ">
                  <h1 className="text-white text-2xl text-center">
                    EXPRESS.JS
                  </h1>
                </div>
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
              delay={3.6}
            >
              <div className="flex items-center justify-between">
                <Image
                  width={400}
                  height={400}
                  className="w-17 h-17 absolute"
                  src="/assets/Api-rest.png"
                  alt="icon"
                />
                <div className="bg-[#ffffff13] h-[3rem] w-[12rem] p-2 rounded-3xl ml-7 ">
                  <h1 className="text-white text-2xl text-center">API REST</h1>
                </div>
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
              delay={4}
            >
              <div className="flex items-center justify-between">
                <Image
                  width={400}
                  height={400}
                  className="w-19 h-19 absolute"
                  src="/assets/Tailwindcss.png"
                  alt="icon"
                />
                <div className="bg-[#ffffff13] h-[3rem] w-[12rem] p-2 rounded-3xl ml-7 ">
                  <h1 className="text-white text-[1.25rem] text-center">
                    <p className="ml-6">TAILWIND CSS</p>
                  </h1>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>

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
          <h1 className=" lg:hidden text-white text-center text-3xl mt-17">
            SKILLS
          </h1>
        </div>
      </AnimatedContent>

      {/* Mobile */}
      <div className="lg:hidden overflow-scroll scroll-mb-10 h-[70vh] w-[13rem] mt-7 mb-12">
        <div className="flex flex-col gap-12">
          <AnimatedContent
            distance={30}
            direction="horizontal"
            reverse={true}
            duration={1}
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.2}
            delay={0.9}
          >
            {skills.map((skill, index) => (
              <div className="flex items-center h-12 p-2 mb-7" key={index}>
                <Image
                  width={400}
                  height={400}
                  className="w-12 h-12 absolute"
                  src={skill.src}
                  alt={`${skill.label} icon`}
                />
                <div className="bg-[#ffffff13] h-10 flex-1 p-2 rounded-3xl ml-4 flex items-center justify-center">
                  <h1 className="text-white text-xl text-center">
                    {skill.label}
                  </h1>
                </div>
              </div>
            ))}
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
}

export default Skills;
