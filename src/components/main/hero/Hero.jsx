import "./Hero.css";
import Me from "../../../assets/me.jpeg";
import logoHtml from "../../../assets/html_logo.png"
import logoCss from "../../../assets/css_logo.png"
import logoJs from "../../../assets/js_logo.png"
import logoRedux from "../../../assets/redux_logo.png"
import logoReact from "../../../assets/react_logo.png"
import logoGithub from "../../../assets/github_logo.png"
import logoLinkedin from "../../../assets/linkedin_logo.png"

export const Hero = () => {
  return (

    <section className="intro" id="home">
         <div className="texto__intro">
            <h2 className="intro__h2">
               <span className="hi">Olá!</span><br /> André de Souza aqui! <span>👍</span>
            </h2>
            <p>React front-end developer</p>
            <div className="links">
               <a href="https://www.linkedin.com/in/andrejue/" target="_blank" rel="noreferrer">
                  <img className="linkedin__logo" src={logoLinkedin} alt="Linkedin link" />
               </a>
               <a href="https://github.com/andrejue" target="_blank" rel="noreferrer" >
                  <img className="github__logo" src={logoGithub} alt="Gihub link" />
               </a>
            </div>
         </div>
         <img src={Me} alt="Foto de perfil de André" className="photo" />
         <aside>
            <div className="skills">
               <img src={logoHtml} alt="HTML5 logo" />
               <img src={logoCss} alt="CSS3 logo" />
               <img src={logoJs} alt="JavaScript logo" />
               <img src={logoReact} alt="React logo" />
               <img src={logoRedux} alt="React logo" />
            </div>
         </aside>
      </section>

  )
}
