import "./styles/Header.css";
import "./styles/glitch.css";
import { useState, useRef } from "react";
import menuIcon from "../../assets/menu-icon-40.png";
import mePixelized from "../../assets/me_pixelized.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Header = ({ toggleTheme, isDarkMode }) => {

   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleOpenModal = () => {
      setIsModalOpen((prev) => !prev);
   };

   const modalRef = useRef(null);

   return (

      <header className="header">

         <div className="header__container">
            <button className="icon__menu"><img src={menuIcon} alt="Menu" onClick={handleOpenModal}/></button>
            <div className="box1">
               <a href="#" className="logo">
                  <img src={mePixelized} alt="Avatar de André em 8 bits" />
                  <div id="container">
                     <h1>andre.dev</h1>
                     <h1>andre.dev</h1>
                     <h1>andre.dev</h1>
                  </div>
               </a>
            </div>

         <div className="box2">
            <nav className="menu" id="menu">
               <ul className="nav__list" id="nav__list">
                  <li className="nav__item"><a href="#about" className="nav__link">Sobre mim</a></li>
                  <li className="nav__item"><a href="#project1" className="nav__link">Projetos</a></li>
                  <li className="nav__item"><a href="#contact" className="nav__link">Contato</a></li>
                  <li className="nav__item"><a href="https://github.com/andrejue" target="_blank" rel="noreferrer" className="nav__link">Github</a></li>
                  <li className="nav__item"><a href="https://www.linkedin.com/in/andrejue/" target="_blank" rel="noreferrer" className="nav__link">Linkedin</a></li>
               </ul>
            </nav>
            <div className="darkmode__btn">
               <input type="checkbox" className="checkbox" id="checkbox" onClick={toggleTheme}/>
               <label htmlFor="checkbox" className="checkbox-label">
                  <FontAwesomeIcon icon={faSun} className="fa-solid fa-sun" />
                  <FontAwesomeIcon icon={faMoon} className="fa-solid fa-moon" />
                  <span className="ball"></span>
               </label>
            </div>
         </div>
      </div>
      <nav className={`menu__modal ${isModalOpen && "open"}`} id="menu" ref={modalRef}>
               <ul className="nav__list">
                  <a href="#">
                     <li className="nav__item">Sobre Mim</li>
                  </a>
                  <a href="#project1">
                     <li className="nav__item">Projetos</li>
                  </a>
                  <a href="#">
                     <li className="nav__item">Github</li>
                  </a>
                  <a href="#">
                     <li className="nav__item">Contato</li>
                  </a>
               </ul>
      </nav>
      {isModalOpen &&
         <div className="backdrop" onClick={handleOpenModal}>

         </div>
      }
   </header>
  )
}

export default Header
