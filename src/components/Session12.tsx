import "../styles/session12.css";
import svgGaratia from "../assets/svg-garantia.svg";

const Session12 = () => {
  return (
    <div className="container-session12">
      <div className="header-session12">
        <img
          src={svgGaratia}
          alt="Garantia de satisfação"
          className="badge-session12"
        />
        <h2 className="title-session12">Garantia de satisfação!</h2>
      </div>
      <p className="text-session12">
        Você não corre nenhum risco. Se não gostar da comunidade, você pode
        pedir reembolso do valor integral do seu investimento nos primeiros 7
        dias. Mas fique tranquilo! Temos certeza que você vai gostar!
      </p>
      <a
        className=" btn-session09"
        href="https://pay.hub.la/GC1ClKWRPjcY9HfX4aik"
        target="_blank"
      >
        Quero participar
      </a>
      <p className="final-text-session12">Te espero lá dentro 😊</p>
    </div>
  );
};

export default Session12;
