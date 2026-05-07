import "./GameModal.css";
import { X } from "lucide-react";

export function GameModal({ game, onClose }) {
  if (!game) return null;

  const descricoes = {
    Nino: [
      "Nino é um gatinho preto de cerca de 2 anos, com pelo brilhante e olhos curiosos que estão sempre atentos a tudo ao redor.",
      "Seu jeitinho único fica ainda mais encantador com a linguinha de fora, como se estivesse sempre distraído ou planejando alguma travessura. Ronronador e carente, ele adora estar por perto recebendo carinho, além de passar o tempo cochilando em cantinhos confortáveis, caçando luzes pela casa e se deliciando com seus petiscos favoritos."
    ],

    Mochi: [
      "Mochi é um gatinho laranja de cerca de 1 ano, dono de um jeitinho calmo e extremamente carinhoso.",
      "Adora passar horas cochilando em lugares quentinhos e no colo de quem ama, sempre esbanjando fofura por onde passa. Seu olhar tranquilo e seu ronronar baixinho transformam qualquer momento em paz e aconchego."
    ],

    Luna: [
      "Luna é uma gatinha curiosa e cheia de energia, sempre pronta para explorar cada cantinho ao seu redor.",
      "Com seus olhinhos atentos e patinhas rápidas, adora brincar, correr e descobrir novidades pela casa. Inteligente e divertida, conquista todos com sua alegria contagiante e seu charme aventureiro."
    ],

    Trix: [
      "Trix é uma gatinha esperta, observadora e cheia de personalidade.",
      "Sempre atenta ao movimento da casa, adora receber carinho e retribui com muita doçura e companhia. Seu jeitinho curioso e elegante faz dela uma presença encantadora."
    ],

    Branca: [
      "Branca é uma gatinha delicada e muito brincalhona, com pelos branquinhos que parecem nuvens de tão macios.",
      "Adora correr atrás de brinquedos, explorar novos espaços e depois descansar em um cantinho confortável. Carinhosa e divertida, encanta todos com sua pureza e energia leve."
    ],

    Eclipse: [
      "Eclipse é um gatinho doce e tranquilo, dono de um olhar marcante e cheio de ternura.",
      "Gosta de companhia, carinho e momentos sossegados ao lado de quem ama. Com sua personalidade calma e afetuosa, transmite paz e conquista corações por onde passa."
    ],

    Sirius: [
      "Sirius é um gatinho reservado e elegante, de personalidade mais tímida e observadora.",
      "Prefere analisar tudo ao seu redor antes de se aproximar, mas quando ganha confiança mostra seu lado carinhoso e fiel. Seu jeito sereno e misterioso faz dele um companheiro especial."
    ],

    Safira: [
      "Safira é uma gatinha charmosa e sofisticada, com pelagem exuberante e postura de verdadeira rainha.",
      "Calma e carinhosa, aprecia momentos tranquilos, carinho e atenção na medida certa. Seu olhar doce e sua elegância natural fazem dela impossível de ignorar."
    ]
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <img src={game.imagem} alt={game.title} className="modal-banner" />

        <div className="modal-body">
          <span className="modal-category"></span>

          <h2>{game.title}</h2>

          <p className="description">
            {descricoes[game.title]?.[0]}
          </p>

          <p className="description">
            {descricoes[game.title]?.[1]}
          </p>

        </div>
      </div>
    </div>
  );
}