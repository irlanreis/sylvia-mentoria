import "../styles/session07.css";

const Session07 = () => {
  return (
    <div className="container-session07">
      <h2 className="title-session07">Investimento e condições especiais</h2>
      <div>
      <p className="price-session07">
        Valor total de <span className="old-value">R$ 16.997,00</span>
      </p>
      <p className="text-price-session07">Valor especial para primeira turma</p>
      </div>
      <span className="special-price-session07">12x de R$ 974,71</span>
      <span className="cash-price-session07">ou R$ 9.997,00 à vista</span>
      <a
        className="discount-session07"
        href="https://pay.hub.la/GC1ClKWRPjcY9HfX4aik"
        target="_blank"
      >
        Aproveite os <strong>40% OFF</strong>
      </a>
      <div className="payment-methods-session07">
        <p className="exclusive-session07">
          Exclusivo para a primeira turma <strong>Vagas limitadas!</strong>
        </p>
        <p className="limited-session07"></p>
      </div>
    </div>
  );
};

export default Session07;
