import "../styles/session03.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Session03 = () => {
  const textMentoria = [
    {
      text: "Médicos atuantes na Atenção Primária que sentem dificuldade na condução de casos.",
    },
    {
      text: "Profissionais que desejam reduzir a sobrecarga e organizar melhor seus atendimentos.",
    },
    {
      text: "Aqueles que querem sair do papel de mero encaminhador para se tornarem mais resolutivos.",
    },
    {
      text: "Médicos que buscam um método estruturado para atender com mais eficiência.",
    },
    {
      text: "Profissionais recém-formados que precisam de suporte para atender com mais segurança.",
    },
    {
      text: "Médicos que atuam no Brasil, mas que fizeram faculdade em outro país e que sentem a necessidade de se adequar a realidade do SUS",
    },
    {
      text: "Médicos que atuam em Unidade de Atenção Primária à Saúde e que almejam uma comunidade para discutir casos clínicos ou situações da APS.",
    },
    {
      text: "Aqueles profissionais que querem uma preceptoria à distância.",
    },
    {
      text: "Profissionais que querem transformar a prática clínica exercendo uma medicina mais qualificada e humanizada",
    },
    {
      text: "Médicos da APS que desejam exercer uma medicina baseada em evidências..",
    },
  ];

  return (
    <div className="container-session03">
      <h2 className="title-session03">A Mentoria é para</h2>
      <ul className="list-session03">
        {textMentoria.map((item, index) => (
          <li key={index}>
            <CheckCircleOutlineIcon className="checked" fontSize="large"/>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Session03;
