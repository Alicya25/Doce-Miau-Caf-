import { Swiper } from "swiper/react"; // Importa os componentes principais do Swiper

// Importa os módulos extras do Swiper
import {
  Navigation, // Botões de navegação
  Pagination, // Paginação (bolinhas)
  Scrollbar, // Barra de rolagem
  A11y, // Acessibilidade
  
} from "swiper/modules";

import "swiper/css"; // Importa os estilos básicos do Swiper
import "swiper/css/navigation"; // Importa o CSS da navegação
import "./slider.css"; // Importa o CSS personalizado

const Slider = ({ settings, children }) => { // Componente Slider
  return (
   <Swiper
  modules={[Navigation, Pagination]}

  slidesPerView={4}
  spaceBetween={20}

  navigation={true}
  {...settings}
>
      {children}
    </Swiper>
  );
};

export default Slider;