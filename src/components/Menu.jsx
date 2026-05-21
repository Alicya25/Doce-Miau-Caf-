import "./Menu.css";
import { gMenu } from "./data/Menu.js";
import { CardMenu } from "./CardMenu";
import detalhe1 from "../assets/detalhes-logo/8.png";
import detalhe2 from "../assets/detalhes-logo/7.png";

import { SwiperSlide } from "swiper/react";
import Slider from "./Slider.jsx";

export function Menu() {

  const doces = gMenu.filter(item => item.tipo === "doce");
  const salgados = gMenu.filter(item => item.tipo === "salgado");
  const bebidaQ = gMenu.filter(item => item.tipo === "bebidaQ");
  const bebidaG = gMenu.filter(item => item.tipo === "bebidaG");

  const sliderSettings = {
    slidesPerView: 5,
    spaceBetween: 10,
  };

  return (
    <div className="principal-menu">

      <div className="titulo-menu">
        <img id="pata" src={detalhe1} alt="café" />
        <h2 id="titulo-menu">Conheça o nosso Menu</h2>
        <img id="pata" src={detalhe2} alt="café" />
      </div>

      {/* DOCES */}
      <h3 className="categoria-titulo">Pratos doces</h3>

      <Slider settings={sliderSettings}>
        {doces.map((g) => (
          <SwiperSlide key={g.id}>
            <CardMenu {...g} />
          </SwiperSlide>
        ))}
      </Slider>

      {/* SALGADOS */}
      <h3 className="categoria-titulo">Salgados</h3>

      <Slider settings={sliderSettings}>
        {salgados.map((g) => (
          <SwiperSlide key={g.id}>
            <CardMenu {...g} />
          </SwiperSlide>
        ))}
      </Slider>

      {/* BEBIDAS QUENTES */}
      <h3 className="categoria-titulo">Bebidas Quentes</h3>

      <Slider settings={sliderSettings}>
        {bebidaQ.map((g) => (
          <SwiperSlide key={g.id}>
            <CardMenu {...g} />
          </SwiperSlide>
        ))}
      </Slider>

      {/* BEBIDAS GELADAS */}
      <h3 className="categoria-titulo">Bebidas Geladas</h3>

      <Slider settings={sliderSettings}>
        {bebidaG.map((g) => (
          <SwiperSlide key={g.id}>
            <CardMenu {...g} />
          </SwiperSlide>
        ))}
      </Slider>

    </div>
  );
}