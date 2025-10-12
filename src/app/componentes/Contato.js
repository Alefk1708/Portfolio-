import AnimatedContent from "../animations/AnimatedContent";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yuoh8vr",
        "template_u2ec8zc",
        form.current,
        "HaFyE8vyQJMfsd31k"
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
          e.target.reset();
        },
        (err) => {
          console.error(err);
          alert("Erro ao enviar a mensagem.");
        }
      );
  };

  return (
    <div className="h-screen w-screen lg:mt-43">
      {/* Pc */}
      <div className="hidden lg:flex gap-55">
        <div className="flex pl-24">
          <div className="text-white w-[28rem] flex flex-col">
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
                <h1 className="text-left text-3xl">CONTATO</h1>
                <p className="mt-12">
                  Estou interessado em oportunidades para colaborar em projetos
                  inovadores e desafiantes. Se tiver alguma proposta, pergunta
                  ou simplesmente quiser conversar, não hesite em me contatar
                  através do formulário ao lado ou pelas minhas redes sociais.
                </p>
              </div>
            </AnimatedContent>

            <div className="flex gap-5 mt-7">
              <AnimatedContent
                distance={50}
                direction="horizontal"
                reverse={true}
                duration={1.2}
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.2}
                delay={0.7}
              >
                <div className="rounded-full w-10 p-1.5 border border-white">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=kaiquealef42@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={40}
                      height={40}
                      src="/assets/email.png"
                      alt="email logo"
                    />
                  </a>
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
                <div className="rounded-full w-10 p-1 border border-white ">
                  <a href="https://github.com/Alefk1708" target="_blank">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/github.png"
                      alt="github logo"
                    />
                  </a>
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
                delay={1.3}
              >
                <div className="rounded-full w-10 p-[7px] border border-white ">
                  <a
                    href="https://www.linkedin.com/in/kaique-alef-a86450207"
                    target="_blank"
                  >
                    <Image
                      width={40}
                      height={40}
                      src="/assets/linkedin.png"
                      alt="linkedin logo"
                    />
                  </a>
                </div>
              </AnimatedContent>
            </div>
          </div>
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
          delay={0.4}
        >
          <div className="bg-[#ffffff13] w-[25rem] rounded-3xl">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col justify-center items-center gap-6 p-9 text-white "
            >
              <input
                type="text"
                name="name"
                placeholder="Nome Completo"
                className="border-2 border-[#9f0000] w-full h-8 rounded-md outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="border-2 border-[#9f0000] w-full h-8 rounded-md outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Mensagem"
                className="border-2 border-[#9f0000] w-full h-30 rounded-md outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[#9f0000] w-65 h-9 rounded-3xl text-[1.3rem] cursor-pointer transition-discrete hover:"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </AnimatedContent>
      </div>

      {/* Mobile */}
      <div className="lg:hidden overflow-y-auto h-full p-2 flex items-center justify-center flex-col gap-15">
        <div className="flex flex-col p-5 mt-70">
          <div className="text-white text-left flex flex-col">
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
                <h1 className="text-left text-3xl">CONTATO</h1>
                <p className="mt-12">
                  Estou interessado em oportunidades para colaborar em projetos
                  inovadores e desafiantes. Se tiver alguma proposta, pergunta
                  ou simplesmente quiser conversar, não hesite em me contatar
                  através do formulário ao lado ou pelas minhas redes sociais.
                </p>
              </div>
            </AnimatedContent>

            <div className="flex gap-5 mt-7">
              <AnimatedContent
                distance={50}
                direction="horizontal"
                reverse={true}
                duration={1.2}
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.2}
                delay={0.7}
              >
                <div className="rounded-full w-10 p-1.5 border border-white">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=kaiquealef42@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={40}
                      height={40}
                      src="/assets/email.png"
                      alt="email logo"
                    />
                  </a>
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
                <div className="rounded-full w-10 p-1 border border-white ">
                  <a href="https://github.com/Alefk1708" target="_blank">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/github.png"
                      alt="github logo"
                    />
                  </a>
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
                delay={1.3}
              >
                <div className="rounded-full w-10 p-[7px] border border-white ">
                  <a
                    href="https://www.linkedin.com/in/kaique-alef-a86450207"
                    target="_blank"
                  >
                    <Image
                      width={40}
                      height={40}
                      src="/assets/linkedin.png"
                      alt="linkedin logo"
                    />
                  </a>
                </div>
              </AnimatedContent>
            </div>
          </div>
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
          delay={0.4}
        >
          <div className="bg-[#ffffff13] rounded-3xl">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col justify-center items-center gap-6 p-9 text-white "
            >
              <input
                type="text"
                name="name"
                placeholder="Nome Completo"
                className="border-2 border-[#9f0000] w-full h-8 rounded-md outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="border-2 border-[#9f0000] w-full h-8 rounded-md outline-none"
                required
              />
              <textarea
                name="message"
                placeholder="Mensagem"
                className="border-2 border-[#9f0000] w-full h-30 rounded-md outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[#9f0000] w-65 h-9 rounded-3xl text-[1.3rem] cursor-pointer transition-discrete hover:"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
}

export default Contato;
