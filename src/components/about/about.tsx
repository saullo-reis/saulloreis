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
          Eu me chamo Saullo Reis, desde a infância sempre fui familiarizado com a computação. Em 2019 me apresentaram a programação e em poucos meses eu estava fazendo jogos e projetos simples, mas foi em 2021 que eu entrei firme e comecei a estudar a parte de FrontEnd com um curso chamado DevQuest.
          Atualmente estou expandindo meu conhecimento e buscando virar FullStack.
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
        <a className="about-infos-curriculo" href="../../../assets/SaulloReis_DevFrontEndJúnior.pdf" download>
          Baixar Currículo
        </a>
      </div>
    </section>
  );
};
