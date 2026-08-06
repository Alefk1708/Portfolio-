import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const contacts = [
  { href: "mailto:kaiquealef42@gmail.com", label: "E-mail", Icon: Mail },
  { href: "https://github.com/Alefk1708", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/kaique-alef-a86450207",
    label: "LinkedIn",
    Icon: Linkedin,
  },
];

export default function Contato() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_yuoh8vr",
        "template_u2ec8zc",
        form.current,
        "HaFyE8vyQJMfsd31k"
      );
      form.current?.reset();
      setStatus("success");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setStatus("error");
    }
  };

  return (
    <section className="section-page" aria-labelledby="contact-title">
      <div className="section-container contact-container">
        <div className="contact-grid">
          <div className="contact-copy">
            <span className="eyebrow">VAMOS CONVERSAR</span>
            <h1 id="contact-title">Contato</h1>
            <p>
              Estou aberto a oportunidades, colaborações e projetos desafiadores.
              Se quiser conversar sobre desenvolvimento, produto ou uma ideia nova,
              é só me chamar.
            </p>

            <div className="contact-links">
              {contacts.map(({ href, label, Icon }) => (
                <a
                  href={href}
                  key={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <Icon size={19} aria-hidden="true" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-panel panel">
            <form ref={form} onSubmit={sendEmail}>
              <label>
                Nome completo
                <input type="text" name="name" autoComplete="name" placeholder="Seu nome" required />
              </label>
              <label>
                E-mail
                <input type="email" name="email" autoComplete="email" placeholder="voce@exemplo.com" required />
              </label>
              <label>
                Mensagem
                <textarea name="message" rows={5} placeholder="Conte um pouco sobre sua ideia..." required />
              </label>

              <button className="button button-primary submit-button" type="submit" disabled={status === "sending"}>
                <Send size={17} aria-hidden="true" />
                {status === "sending" ? "Enviando..." : "Enviar mensagem"}
              </button>

              <div className="form-status" role="status" aria-live="polite">
                {status === "success" && "Mensagem enviada com sucesso. Obrigado!"}
                {status === "error" && "Não foi possível enviar agora. Tente novamente ou use o e-mail acima."}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
