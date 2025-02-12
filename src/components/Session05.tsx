import "../styles/session05.css";
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';

const Session05 = () => {
  const textMentoria = [
    {
      text: "8 encontros quinzenais on-line e ao vivo com a Dra. Sylvia.",
    },
    {
      text: "Webnários estratégicos e aplicáveis à rotina médica com Hotseat posterior para discussão e dúvidas.",
    },
    {
      text: "Material de apoio e ferramentas práticas para aplicação imediata.",
    },
    {
      text: "Acesso a comunidade por meio de grupo whatsapp exclusivo com todos os mentorados. Networking é tudo!",
    },
    {
      text: "4 meses de suporte e orientação na condução de casos em grupo de whatsapp. Ambiente seguro e protegido para tirar suas dúvidas.",
    },
  ];

  return (
    <div className="container-session05">
      <h2 className="title-session05">Como vai funcionar?</h2>
      <span className="ligth-effect">
      <ul className="list-session05">
        {textMentoria.map((item, index) => (
          <li key={index}>
            <CheckCircleSharpIcon className="checked" fontSize="large" />
            {item.text}
          </li>
        ))}
      </ul>
      </span>
    </div>
  );
};

export default Session05;
