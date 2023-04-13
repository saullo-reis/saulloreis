import "./hamburguer.sass"

export const Hamburguer = () => {
    return (
      <>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
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
      </>
    );
}