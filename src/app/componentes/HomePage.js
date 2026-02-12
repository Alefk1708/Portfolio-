import AnimatedContent from "../animations/AnimatedContent";
import Typewriter from "typewriter-effect";
import BlurText from "../animations/BlurText";
import Image from "next/image";

function HomePage() {
  return (
    <div className="w-[95%] h-[80%]  top-[57%] left-[50%] absolute translate-[-50%]">
      {/*Mobile HomePage*/}
      <div className=" lg:hidden flex flex-col justify-center items-center gap-12 ">
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
          <div className=" flex justify-center ">
            <Image
              src="/assets/Yoriichi-Perfil.png"
              alt="Foto de perfil"
              width={180} // ajuste conforme o tamanho que quer
              height={180} 
              className="lg:hidden rounded-full border-2 border-white shadow-[0_0_2rem_#ff0000]"
            />
          </div>
        </AnimatedContent>

        <div className="text-center ">
          <BlurText
            text="Olá meu nome é"
            delay={400}
            animateBy="words"
            direction="top"
            stepDuration={0.35}
            className="text-white text-[1.5rem] absolute left-[50%] translate-[-50%]"
          />

          <AnimatedContent
            distance={50}
            direction="horizontal"
            reverse={true}
            duration={1.2}
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.2}
            delay={0.4}
          >
            <div>
              <h1 className="text-white flex flex-grow justify-center text-5xl gap-2 mt-4">
                KAIQUE<h1 className="text-[#9f0000]">ALEF</h1>
              </h1>
            </div>
          </AnimatedContent>

          <div className="w-[100%] h-9 ">
            <Typewriter
              options={{
                strings: [
                  '<span class="text-white text-[1.5rem] flex flex-wrap gap-3 ">Sou <span class="text-[#9f0000] text-[1.5rem]">Desenvolvedor Fullstack</span></span>.',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="flex gap-5">
          {[
            { href: "mailto:kaiquealef42@gmail.com", src: "/assets/email.png", alt: "email logo" },
            { href: "https://github.com/Alefk1708", src: "/assets/github.png", alt: "github logo" },
            { href: "https://www.linkedin.com/in/kaique-alef-a86450207", src: "/assets/linkedin.png", alt: "linkedin logo" },
          ].map((item, index) => (
            <AnimatedContent
              key={index}
              distance={50}
              direction="horizontal"
              reverse={true}
              duration={1.2}
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.2}
              delay={0.7 + index * 0.3}
            >
              <div className="rounded-full w-10 p-1.5 border border-white">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <Image src={item.src} alt={item.alt} width={30} height={30} />
                </a>
              </div>
            </AnimatedContent>
          ))}
        </div>

        <AnimatedContent
          distance={50}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.2}
          delay={1.6}
        >
          <div className="text-[2rem] text-white rounded-3xl px-4 border-2 border-[#9f0000]">
            <a
              href="https://drive.google.com/file/d/1OhcpimRgWaw_Sjl1bDO_YA-dciehcIQZ/view?usp=sharing"
              target="_blank"
            >
              BAIXAR CV
            </a>
          </div>
        </AnimatedContent>
      </div>

      {/* Pc HomePage */}
      <div className=" hidden lg:flex flex-wrap justify-center items-center p-15">
        <div className="flex flex-col gap-5 w-[25rem]">
          <div className="mt-8">
            <BlurText
              text="Olá meu nome é"
              delay={400}
              animateBy="words"
              direction="top"
              stepDuration={0.35}
              className="text-white text-[1.7rem] "
            />

            <AnimatedContent
              distance={50}
              direction="horizontal"
              reverse={true}
              duration={1.2}
              initialOpacity={0}
              animateOpacity={true}
              scale={1}
              threshold={0.2}
              delay={0.4}
            >
              <div>
                <h1 className="text-white flex flex-grow text-6xl gap-2 mt-1">
                  KAIQUE<h1 className="text-[#9f0000]">ALEF</h1>
                </h1>
              </div>
            </AnimatedContent>

            <div className="w-[100%] h-9 ">
              <Typewriter
                options={{
                  strings: [
                    '<span class="text-white text-[1.7rem] flex flex-wrap gap-3 ">Sou <span class="text-[#9f0000] text-[1.7rem]">Desenvolvedor Fullstack.</span></span>',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

          <div className="flex gap-5 mt-4">
            {[
              { href: "mailto:kaiquealef42@gmail.com", src: "/assets/email.png", alt: "email logo" },
              { href: "https://github.com/Alefk1708", src: "/assets/github.png", alt: "github logo" },
              { href: "https://www.linkedin.com/in/kaique-alef-a86450207", src: "/assets/linkedin.png", alt: "linkedin logo" },
            ].map((item, index) => (
              <AnimatedContent
                key={index}
                distance={50}
                direction="horizontal"
                reverse={true}
                duration={1.2}
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.2}
                delay={0.7 + index * 0.3}
              >
                <div className="rounded-full w-10 p-1.5 border border-white">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <Image src={item.src} alt={item.alt} width={30} height={30} />
                  </a>
                </div>
              </AnimatedContent>
            ))}
          </div>

          <AnimatedContent
            distance={50}
            direction="horizontal"
            reverse={true}
            duration={1.2}
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.2}
            delay={1.6}
          >
            <div className=" w-[42%] text-[1.3rem] text-center mt-4 text-white rounded-3xl px-4 border-2 border-[#9f0000]">
              <a
                href="https://drive.google.com/file/d/1OhcpimRgWaw_Sjl1bDO_YA-dciehcIQZ/view?usp=sharing"
                target="_blank"
              >
                BAIXAR CV
              </a>
            </div>
          </AnimatedContent>
        </div>

        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={1.2}
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.2}
          delay={0.4}
        >
          <div className="w-[35rem]  flex flex-col items-center ">
            <Image
              src="/assets/Yoriichi-Perfil.png"
              alt="Foto de perfil"
              width={320} 
              height={320} 
              className="rounded-full border-4 border-white shadow-[0_0_2rem_#ff0000]"
            />
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
}

export default HomePage;
