import "../projects.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";

import img1 from './assets/meme_generator_preview.jpg';
import img2 from './assets/meme_generator_preview2.jpg';
import img3 from './assets/meme_generator_preview3.jpg';
import img4 from './assets/meme_generator_preview4.jpg';

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
        <h2>Meme Generator</h2>
        <p>
          Um simples projeto no qual você pode fazer um novo meme sobre uma imagem de algum meme famoso.
        </p>
        <p>
          O texto é colocado sobre a imagem (que é aleatória e que vem de uma fonte externa),
          sendo um na parte de cima e outro embaixo, tal qual aqueles memes antigos que víamos
          na internet em 2010. (Limite de apenas 2 linhas de texto).
        </p>
        <p>
          O <strong>mais legal</strong> deste projeto é o botão para baixar o elemento inteiro do meme.
          A imagem atual com o texto que o usuário quiser sobre ela.
        </p>
        <div className="links">
          <a href="https://github.com/andrejue/meme-generator" className="a" target="_blank" rel="noreferrer">
            <img src={Github} alt="" />
            <span className="span">Repositório no github <ArrowSquareOut size={20} /></span>
          </a>
          <a href="https://memegenerator-andrejue.vercel.app/" className="a" target="_blank" rel="noreferrer">
            <img src={Vercel} alt="" />
            <span className="span">Veja funcionando <ArrowSquareOut size={20}/> </span>

          </a>
        </div>
      </div>
    </div>
  )
}
