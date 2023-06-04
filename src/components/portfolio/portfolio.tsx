import { useCallback, useEffect } from 'react'
import {projects} from './projects.json'
import monitor from "./monitor.png"
import celular from "./celular.png"
import './style.sass'

export const Portfolio = () => {
    const animationDelay = 0.2

    const handleScroll = useCallback(() => {
      const element = document.querySelector(".portfolio-projects-item");
      const projects = document.querySelector(".portfolio-projects");
      const childrens = projects?.children
      if (!element || !childrens) return;
      const position = element?.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (position < screenPosition) {
        for(let i = 0; i < childrens?.length; ++i){
          childrens[i].classList.add('slideUp')
        }
      } else {
        for (let i = 0; i < childrens?.length; ++i) {
          childrens[i].classList.remove("slideUp");
        }
      }
    },[]); 

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return(
        <section className='portfolio' id="portfolio">
            <h1 className='portfolio-title'>Portifólio</h1>
            <ul className='portfolio-projects'>{projects.map((element, index) => {
                return (
                  <li
                    style={{ animationDelay: `${index * animationDelay}s` }}
                    className="portfolio-projects-item"
                    key={index}
                  >
                    <p style={{color: 'gray', textAlign: 'center'}}>Clique na imagem para abrir o site</p>
                    <a href={element.link} target="_blank">
                      <div
                        className="portfolio-projects-item-monitor"
                        style={{
                          backgroundImage: `url(${monitor})`,
                        }}
                      >
                        <img className="portfolio-projects-item-monitor-image" src={element.image}></img>
                      </div>
                      <div
                        className="portfolio-projects-item-celular"
                        style={{
                          backgroundImage: `url(${celular})`,
                        }}
                      ><img className="portfolio-projects-item-celular-image" src={element.mobileImage}></img>
                      </div>
                    </a>
                  </li>
                );
            })}</ul>
        </section>
    )
}