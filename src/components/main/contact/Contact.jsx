import './Contact.css';
import LinkedinLogo from "../../../assets/linkedin_logo.png";
import EmailLogo from "../../../assets/emaillogo.png";
import CurriculumLogo from "../../../assets/curriculum_logo.png";
import Curriculo from '../../../../public/pdf/Andre de Souza - Curriculum.pdf';

export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <h1 className='project1'>Contato</h1>
      <p>Faça contato comigo por aqui:</p>
      <div className="contact__links">

         <a href="mailto:andre_aru010@hotmail.com?subject=Oi,%20eu%20vi%20seu%20portf%C3%B3lio">
            <img src={EmailLogo} alt="" />
            andre_aru010@hotmail.com
         </a>

         <a href="https://www.linkedin.com/in/andrejue/" target="_blank" rel="noreferrer" >
            <img src={LinkedinLogo} alt="" />
            Linkedin
         </a>

         <a href={Curriculo} target="_blank" rel="noopener noreferrer" >
            <img src={CurriculumLogo} alt="" />
            Meu currículo em PDF
         </a>

      </div>
    </section>
  )
}
