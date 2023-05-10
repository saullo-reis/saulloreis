import { useCallback, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import './style.sass'
import { Email } from "./email/email";

export const Contact = () => {

  const handleScroll = useCallback(() => {
    const element = document.querySelector('.contact')
    if(!element) return;
    const position = element?.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;


    if(position < screenPosition){
      element.classList.add('slideRight')
    }
    else{
      element.classList.remove("slideRight");
    }
  },[])


  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[handleScroll])

   useEffect(() => {
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, [handleScroll]);

  return (
    <section className="contact" id="contact">
      <h1 className="contact-title">Contato</h1>
      <div className="contact-infos">
        <div className="contact-infos-texts">
          <h1>Vamos trabalhar juntos</h1>
          <p>
             Entre em contato comigo por meio das redes sociais e estarei disponível para responder em até 24 horas. Caso a mensagem seja enviada entre 8h e 19h, é provável que eu consiga responder prontamente. Vamos colaborar e criar soluções inovadoras juntos.
          </p>
          <ul>
            <li>
              <a href="https://github.com/saullo-reis" target="_blank">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/saullo-reis-874852231/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/saullo-reis-874852231/"
                target="_blank"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
        <Email />
      </div>
    </section>
  );
};
