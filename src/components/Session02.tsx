import "../styles/session02.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const MentoriaNEAP = () => {
  const textList = [
    {
      text: "Como estruturar atendimento médico de qualidade mesmo com pouco tempo de consulta na APS.",
    },
    {
      text: "Estratégias para priorizar as demandas e conduzir casos sem encaminhar desnecessariamente.",
    },
    {
      text: "Comunicação clínica eficaz para melhorar a experiência do paciente.",
    },
    {
      text: "Métodos para reduzir a sobrecarga e aumentar a confiança na prática médica.",
    },
    {
      text: "Acesso a protocolos mais atualizados que irão te possibilitar exercer uma Medicina Baseada em Evidências.",
    },
    {
      text: "Mais segurança na condução de casos complexos.",
    },
    {
      text: "Como se tornar mais resolutivo dentro da APS.",
    },
  ];

  return (
    <div className="container-session02">
      <h2 className="title-session02">A Mentoria NEAP</h2>
      <p className="article-session02">
        <strong>Nova Era da Atenção Primária</strong> foi criada para te ajudar
        a transformar sua prática médica com{" "}
        <strong>métodos estruturados</strong>, estratégias eficientes e mais
        segurança na condução dos atendimentos.
      </p>
      <h3 className="subtitle-session02">
        O que você vai aprender na Mentoria NEAP?
      </h3>

      <ul className="list-session02">
        {textList.map((item, index) => (
          <li className="list-item-session02">
            <CheckCircleIcon
              key={index}
              className="icon-session02"
              fontSize="large"
              color="success"
              />
              {item.text}
          </li>
        ))}
      </ul>
      <button className="button-session01">
        comprar agora
      </button>
    </div>
  );
};

export default MentoriaNEAP;
