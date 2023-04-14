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
        src="https://uploaddeimagens.com.br/images/004/426/937/full/faaaas.png?1681297757"
      ></img>
      <div className="about-infos">
        <h1 className="about-infos-title">Sobre mim</h1>
        <p className="about-infos-red">Sobre</p>
        <p className="about-infos-text">
          Sou uma pessoa curiosa e que busca sempre evoluir a cada dia, conheci
          a programação em 2019 porém apenas em 2021 que eu realmente entrei
          firme na área, fiz um curso de Front-end com mentoria com os gêmeos do
          DevEmDobro e atualmente busco o conhecimento através de vídeos e
          comunidades.
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
        <a className="about-infos-curriculo" href="../../../assets/curriculo.pdf" download>
          Baixar Currículo
        </a>
      </div>
    </section>
  );
};
