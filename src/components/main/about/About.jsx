import "./About.css";
import Dev from "../../../assets/developer.png"

export const About = () => {
  return (
   <div className="about__div" id="about">
         <section className="about__container">
            <img src={Dev} alt="Developer image" />
            <div>
               <h2 className="about__title">
                  Sobre mim
               </h2>
               <p><span className="hand">Oi!  👋</span><br/><br/>
               </p>
               <p>Me chamo <strong>André de souza</strong>, seja bem-vindo ao meu portfólio! <br/></p>
               <p>
                  Sou um novato na programação front-end. Com habilidades em HTML5, CSS, JavaScript e React.
                  Me apaixonando cada vez mais enquanto continuo aprendendo.
               </p>
               <p>
                  Com meu conhecimento em HTML5, sou capaz de estruturar páginas web com semântica adequada e acessibilidade, garantindo que o conteúdo seja bem organizado e facilmente compreensível para os usuários.</p>
               <p>
                  Estou ansioso para aplicar meu conhecimento e entusiasmo para ajudar a tornar a web um lugar mais interativo e receptivo. Também em aprender como funciona o mercado e como é, de fato, trabalhar com programação web em uma empresa, com projetos grandes e sérios. Sinta-se à vontade para explorar meu portfólio e conferir os projetinhos que desenvolvi até o momento.  Entre em contato comigo para discutirmos como posso contribuir para sua empresa ou projeto front-end.
               </p>
               <p>
                  Atualmente estou desenvolvendo novos projetos para aumentar minhas habilidades com coisas novas. Então agora com uma base mais sólida em JavaScript estou aprendendo TypeScript também. Meu próximo desafio está sendo fazer uma dashboard.
               </p>
            </div>
         </section>
      </div>
  )
}
