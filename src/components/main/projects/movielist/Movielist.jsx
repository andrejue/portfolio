import "../projects.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";

import img1 from "./assets/preview.jpg";
import img2 from "./assets/preview2.jpg";
import img3 from "./assets/preview3.jpg";
import img4 from "./assets/preview4.jpg";

import Github from "../../../../assets/github_logo.png";
import Vercel from "../../../../assets/vercel_logo.png";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "react-alice-carousel/lib/alice-carousel.css";
import { ArrowSquareOut } from "@phosphor-icons/react";

export default function MemeGenerator() {
  register();

  const images = [
    { id: "1", image: img1 },
    { id: "2", image: img2 },
    { id: "3", image: img3 },
    { id: "4", image: img4 },
  ];

  return (
    <div className="project__container">
      <Swiper
        slidesPerView={1}
        autoplay={true}
        dots={0}
        navigation
        pagination={true}
        className="swiper"
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={img.image} alt="slider" className="slide__item" />
          </SwiperSlide>
        ))}
        ...
      </Swiper>

      <div className="description__container">
        <h2>MovieZ</h2>
        <p>Um catálogo de filmes com a interface inspirada no app Stremio.</p>
        <p>
          Acessa e consome a API do TMDB (The movie database), que traz muitos
          dados sobre cada filme ou série. O projeto também conta com carroséis,
          React router DOM, React Player.
        </p>
        <p>
          Cada filme tem sua própria tela, inspirada no Stremio, que conta com
          informações do filme ou da série, contendo um trailer em iframe (caso
          o item tenha um trailer oficial).
        </p>
        <p>Efeitos em CSS usando SASS são usados no projeto também.</p>
        <div className="links">
          <a
            href="https://github.com/andrejue/lista_filmes"
            className="a"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="GitHub Logo" />
            <span className="span">
              Repositório no github <ArrowSquareOut size={20} />
            </span>
          </a>
          <a
            href="https://moviezlist.vercel.app/"
            className="a"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Vercel} alt="Vercel Logo" />
            <span className="span">
              Veja funcionando <ArrowSquareOut size={20} />{" "}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
