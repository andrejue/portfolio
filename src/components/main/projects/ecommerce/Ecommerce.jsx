import "../projects.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import Github from "../../../../assets/github_logo.png";
import Vercel from "../../../../assets/vercel_logo.png";
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ArrowSquareOut } from "@phosphor-icons/react";

export default function MemeGenerator() {

  register();

  const images = [
    {id: '1', image: img1},
    {id: '2', image: img2},
    {id: '3', image: img3},
    {id: '4', image: img4},
  ]

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
              <img
                src={img.image}
                alt="slider"
                className="slide__item"
                />
            </SwiperSlide>
          ))}
      ...
        </Swiper>

      <div className="description__container">
        <h2>Fake Apple Store</h2>
        <p>
          Um e-commerce feito em Reactjs no qual Redux é usado para cuidar dos estados globais. Estados usados no carrinho de compras, dropdowns para mobile e alguns efeitos visuais.
        </p>
        <p>
          Talvez a cópia mais barata da Apple store que você vai ver? Sim. Mas contém carrosséis, com links e touch funcionando. O React router dom cuida da navegação entre páginas e componentes.
        </p>
        <div className="links">
          <a href="https://github.com/andrejue/ecommerce_reactjs_redux" className="a" target="_blank" rel="noreferrer">
            <img src={Github} alt="github logo" />
            <span className="span">Repositório no github <ArrowSquareOut size={20} /></span>
          </a>
          <a href="https://applestorechernobyl.vercel.app/" className="a" target="_blank" rel="noreferrer">
            <img src={Vercel} alt="vercel logo" />
            <span className="span">Veja funcionando <ArrowSquareOut size={20}/> </span>

          </a>
        </div>
      </div>
    </div>
  )
}
