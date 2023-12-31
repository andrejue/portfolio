import MemeGenerator from "./meme_generator/MemeGenerator";
import Ecommerce from "./ecommerce/Ecommerce";
import Movielist from "./movielist/Movielist";
import "./projects.css";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 id="project1" className="project1">
        Projetos
      </h1>
      <Movielist />
      <Ecommerce />
      <MemeGenerator />
    </section>
  );
};
