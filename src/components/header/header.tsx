import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { Hamburguer } from "./menu-hamburguer";

import './style.sass'
export const Header = () => {
  return (
    <section className="header">
      <h1 className="header-logo">S.R</h1>
      <ul className="header-nav">
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#portfolio">Portifólio</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
      <ul className="header-redes">
        <li className="header-redes-item">
          <a href="https://github.com/saullo-reis" target="_blank">
            <AiFillGithub />
          </a>
        </li>
        <li className="header-redes-item">
          <a
            href="https://www.linkedin.com/in/saullo-reis-874852231/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li className="header-redes-item">
          <a
            href="https://www.linkedin.com/in/saullo-reis-874852231/"
            target="_blank"
          >
            <AiFillInstagram />
          </a>
        </li>
      </ul>
      <Hamburguer/>
    </section>
  );
};
