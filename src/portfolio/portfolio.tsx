import { useCallback, useEffect } from 'react'
import {projects} from './projects.json'
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
        <section className='portfolio'>
            <h1 className='portfolio-title'>Portifólio</h1>
            <ul className='portfolio-projects'>{projects.map((element, index) => {
                return (
                  <li
                    style={{ animationDelay: `${index * animationDelay}s` }}
                    className="portfolio-projects-item"
                    key={index}
                  >
                    <div
                      className="portfolio-projects-item-image"
                      style={{
                        backgroundImage: `url(${element.image})`
                      }}
                    ></div>
                    <h2 className="portfolio-projects-item-text">
                      {element.name}
                    </h2>
                  </li>
                );
            })}</ul>
        </section>
    )
}