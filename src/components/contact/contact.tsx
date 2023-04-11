import { useCallback, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import './style.sass'

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
    <section className="contact">
      <h1 className="contact-title">Contato</h1>
      <div className="contact-infos">
        <div className="contact-infos-texts">
          <h1>Vamos trabalhar juntos</h1>
          <p>
            Me chame na dm em alguma dessas redes sociais irei te responder em
            menos de 24 horas e se for entre 8:00 até as 19:00 provavelmente
            respondo de imediato.
          </p>
          <ul>
            <li>
              <a href="https://github.com/saullo-reis" target="_blank">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/saullo-reis-874852231/">
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/saullo-reis-874852231/">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-infos-inputs">
          <div>
            <input placeholder="Nome"></input>
            <input placeholder="Email"></input>
            <input placeholder="Assunto"></input>
          </div>
          <textarea cols={43} rows={10} >Mensagem</textarea>
        </div>
      </div>
    </section>
  );
};
