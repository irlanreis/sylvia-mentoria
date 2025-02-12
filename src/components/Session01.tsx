import "../styles/session01.css";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import logoMentoria from "../assets/NEAP-Mentoria-Logo-2.png"

const Session01 = () => {
  const textList = [
    {
      text: "Atendimentos longos e desgastantes?",
    },
    {
      text: "Dúvidas sobre quando encaminhar ou como conduzir um caso?",
    },
    {
      text: "Sensação de sobrecarga e falta de tempo para aprofundar cada paciente?",
    },
  ];

  return (
    <div className="card-session01">
      <div className="content-session01">
      <img src={logoMentoria} alt="logo" className="logo-session01" />
        <h1>
          Sua atuação na Atenção Primária pode ser mais segura e resolutiva!
        </h1>
        <p>Você sente insegurança ao conduzir casos complexos na APS?</p>
        <div className="warnings-session01">
          <ul className="list-container-session01">
            {textList.map((item, index) => (
              <li key={index}>
                <WarningAmberIcon fontSize="large"/>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Session01;
