import croissant from "../../assets/doces/croissant.jpg";
import brownie from "../../assets/doces/brownie.jpg";
import macarons from "../../assets/doces/macarons.jpg";
import cookie from "../../assets/doces/cookies.jpg";
import cupcake from "../../assets/doces/cupcakes.jpg";
import mochi from "../../assets/doces/mochi.jpg";
import rocambole from "../../assets/doces/rocambole.jpg";
import bolacha from "../../assets/doces/bolacha.jpg";
import panqueca from "../../assets/doces/panquequinha.jpg";
import Tiramisu from "../../assets/salgados/tiramisu_chocolate.jpg"

//salgados
import batataFrita from "../../assets/salgados/batatinha_frita.jpg"
import crepioca from "../../assets/salgados/crepioca_frango.jpg"
import croissantSalgado from "../../assets/salgados/croissant_salgado.jpg"
import enroladinhoSalsicha from "../../assets/salgados/enroladinho_salsicha.jpg"
import frangoFrito from "../../assets/salgados/frango_frito.jpg"
import lanche from "../../assets/salgados/lanche_natural.jpg"
import pizza from "../../assets/salgados/mini_pizza.jpg"
import panquecaCarne from "../../assets/salgados/panqueca_carne.jpg"
import entrada from "../../assets/salgados/pãozinho_entrada.jpg"
import sanduCat from "../../assets/salgados/sanduiche.jpg"

//bebidas quentes
import affogato from "../../assets/bebidas-quentes/affogato .jpg";
import cafeLeite from "../../assets/bebidas-quentes/café_leite.jpg"
import cafeTurco from "../../assets/bebidas-quentes/café_turco.jpg"
import ChocolateQuente from "../../assets/bebidas-quentes/chocolate_quente.jpg"
import expresso from "../../assets/bebidas-quentes/expresso.jpg"
import FlatWhite from "../../assets/bebidas-quentes/flat_white.jpg"
import frapuccino from "../../assets/bebidas-quentes/frapuccino.jpg"
import Irish from "../../assets/bebidas-quentes/Irish.jpg"
import Latte from "../../assets/bebidas-quentes/latte.jpg"
import Mocha from "../../assets/bebidas-quentes/mocha.jpg"

//bebidas geladas
import Agua from "../../assets/bebidas-geladas/água_mineral.jpg";
import tonica from "../../assets/bebidas-geladas/água_tonica.jpg";
import Cha from "../../assets/bebidas-geladas/chá_pessego.jpg";
import Coca from "../../assets/bebidas-geladas/coca_lata.jpg";
import LagoaAzul from "../../assets/bebidas-geladas/lagoa_azul.jpg";
import LaranjaMorango from "../../assets/bebidas-geladas/laranja_morango.jpg";
import Limonada from "../../assets/bebidas-geladas/limonada_suiça.jpg";
import Soda from "../../assets/bebidas-geladas/soda_italiana.jpg";
import Laranja from "../../assets/bebidas-geladas/suco_laranja.jpg";
import Maracuja from "../../assets/bebidas-geladas/suco_marácuja.jpg";

export const gMenu = [
     //doces
    { id: 1, title: "Croissant de Nutella", category: "R$19,99", imagem: croissant, tipo: "doce"  }, // criar objeto usando chaves{}
    { id: 2, title: "Brownie de Chocolate", category: "R$17,99", imagem: brownie, tipo: "doce" },
    { id: 3, title: "Macarons de gatinhos", category: "R$24,99", imagem: macarons, tipo: "doce" },
    { id: 4, title: "Cookie Red Velvet", category: "R$15,99", imagem: cookie, tipo: "doce" },
    { id: 5, title: "CatCake", category: "R$18,98", imagem: cupcake, tipo: "doce" },
    { id: 6, title: "Mochi", category: "R$13,99", imagem: mochi, tipo: "doce" },
    { id: 7, title: "Bolacha", category: "R$5,99", imagem: bolacha, tipo: "doce" },
    { id: 8, title: "PanCat", category: "R$5,99", imagem: panqueca, tipo: "doce" },
    { id: 9, title: "Tiramisu", category: "R$7,00", imagem: Tiramisu, tipo: "doce" },
     //salgados
    { id: 10, title: "Batata Frita", category: "R$14,50", imagem: batataFrita, tipo: "salgado" }, // criar objeto usando chaves{}
    { id: 11, title: "Crepioca de Frango", category: "R$17,99", imagem: crepioca, tipo: "salgado"  },
    { id: 12, title: "Croissant Misto", category: "R$15,99", imagem: croissantSalgado, tipo: "salgado"  },
    { id: 13, title: "Enroladinho de Salsicha", category: "R$13,99", imagem: enroladinhoSalsicha, tipo: "salgado" },
    { id: 14, title: "Frango Frito", category: "R$18,00", imagem: frangoFrito, tipo: "salgado"  },
    { id: 15, title: "Lanche Natural", category: "R$12,89", imagem: lanche, tipo: "salgado"  },
    { id: 16, title: "Mini Pizza", category: "R$10,99", imagem: pizza, tipo: "salgado"  },
    { id: 17, title: "Panqueca de Carne", category: "R$5,99", imagem: panquecaCarne, tipo: "salgado" },
    { id: 18, title: "Pão de Entrada", category: "R$4,99", imagem: entrada, tipo: "salgado " },
    { id: 19, title: "SanduCat", category: "R$21,70", imagem: sanduCat, tipo: "salgado"  },
    //bebida quente
    { id: 20, title: "Affogato", category: "R$8,99", imagem: affogato, tipo: "bebidaQ" },
    { id: 21, title: "Café com Leite", category: "R$2,99", imagem: cafeLeite, tipo: "bebidaQ" },
    { id: 22, title: "Café Turco", category: "R$3,99", imagem: cafeTurco, tipo: "bebidaQ" },
    { id: 23, title: "Chocolate Quente", category: "R$5,99", imagem: ChocolateQuente, tipo: "bebidaQ"},
    { id: 24, title: "Expresso", category: "R$1,00", imagem: expresso, tipo: "bebidaQ"},
    { id: 25, title: "Flat White", category: "R$3,99", imagem: FlatWhite, tipo:" bebidaQ" },
    { id: 26, title: "Frapuccino", category: "R$12,99", imagem: frapuccino, tipo: "bebidaQ" },
    { id: 27, title: "Irish", category: "R$5,45", imagem: Irish, tipo: "bebidaQ" },
    { id: 28, title: "Latte", category: "R$6,00", imagem: Latte, tipo: "bebidaQ" },
    { id: 29, title: "Mocha", category: "R$9,94", imagem: Mocha, tipo: "bebidaQ" },

    //bebidas geladas
    { id: 30, title: "Água Mineral", category: "R$2,99", imagem: Agua, tipo: "bebidaG" },
    { id: 31, title: "Água Tônica", category: "R$5,99", imagem: tonica, tipo: "bebidaG"  },
    { id: 32, title: "Chá de Pêssego", category: "R$6,99", imagem: Cha, tipo: "bebidaG"  },
    { id: 33, title: "Coca-Cola lata", category: "R$4,99", imagem: Coca, tipo: "bebidaG"  },
    { id: 34, title: "Lagoa Azul", category: "R$19,85", imagem: LagoaAzul, tipo: "bebidaG  "},
    { id: 35, title: "Limonada Suíça", category: "R$16,99", imagem: Limonada, tipo: "bebidaG"  },
    { id: 36, title: "Soda Italiana", category: "R$18,99", imagem: Soda, tipo: "bebidaG"  },
    { id: 37, title: "Suco de Laranja", category: "R$7,99", imagem: Laranja, tipo: "bebidaG"  },
    { id: 38, title: "Suco de Maracujá", category: "R$7,99", imagem: Maracuja, tipo: "bebidaG"  },
    { id: 39, title: "Suco Laranja+Morango", category: "R$8,98", imagem: LaranjaMorango, tipo: "bebidaG"  },

];