import "./style.sass";
import { FaSass, FaGit, FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiRedux, SiJest } from "react-icons/si";
import { useCallback, useEffect} from "react";

export const About = () => {


  const handleScroll = useCallback(() => {
    const element = document?.querySelector(".about");
    if (!element) return;
    const position = element?.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition ) {
      element.classList.add('slideRight')
    }
    else{
        element.classList.remove('slideRight')
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section className="about" id="sobre">
      <img
        className="about-img"
        src="https://i.ibb.co/W0WFcvp/foto-minha-2.jpg"
      ></img>
      <div className="about-infos">
        <h1 className="about-infos-title">Sobre mim</h1>
        <p className="about-infos-red">Sobre</p>
        <p className="about-infos-text">
          Meu nome é Saullo Reis e tenho uma sólida paixão pela área de tecnologia desde a infância. Em 2019, fui apresentado ao mundo da programação e, em pouco tempo, comecei a desenvolver jogos e projetos simples. Decidi me aprofundar na área e, em 2021, iniciei um curso especializado em desenvolvimento Front-End chamado DevQuest.<br></br>
          Atualmente, estou empenhado em expandir meu conhecimento e habilidades no campo da tecnologia, com o objetivo de me tornar um profissional Full Stack.<br></br> Estou constantemente buscando novos desafios e oportunidades que me permitam crescer e contribuir com soluções inovadoras no setor.
        </p>
        <p className="about-infos-red">Habilidades</p>
        <ul className="about-infos-skills">
          <li>
            <FaCss3 />
          </li>
          <li>
            <FaGit />
          </li>
          <li>
            <FaHtml5 />
          </li>
          <li>
            <FaReact />
          </li>
          <li>
            <FaSass />
          </li>
          <li>
            <SiJavascript />
          </li>
          <li>
            <SiRedux />
          </li>
          <li>
            <SiTypescript />
          </li>
          <li>
            <SiJest />
          </li>
        </ul>
        <a className="about-infos-curriculo" href="../../.././assets/SaulloReis_DevFrontEndJúnior.pdf" download>
          Baixar Currículo
        </a>
      </div>
    </section>
  );
};
