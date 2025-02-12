import "../styles/session06.css";
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';

const Session06 = () => {
  const textMentoria = [
    {
      text: "Aula sobre Telemedicina.",
    },
    {
      text: "Aula sobre Organização Financeira para médicos.",
    },
    {
      text: "Aula sobre Cuidados Paliativos.",
    },
    {
      text: "Aula sobre Comunicação não violenta.",
    },
    {
      text: "Acesso a drive com protocolos mais atualizados da APS.",
    },
  ];

  return (
    <div className="container-session06">
      <h2 className="title-session06">Bônus exclusivos de primeira turma!</h2>
      <ul className="list-session06">
        {textMentoria.map((item, index) => (
          <li key={index}>
            <CheckCircleSharpIcon className="checked" fontSize="large" />
            {item.text}
          </li>
        ))}
      </ul>

      <div className="container-session06-text">
        <p>
          Transforme sua prática clínica com 8 encontros on-line, suporte da sua
          mentora durante 4 meses e acesso à comunidade diariamente!
        </p>
      </div>

        <a className="btn-session06" href="https://pay.hub.la/GC1ClKWRPjcY9HfX4aik" target="_blank">Inscrever-se!</a>
    </div>
  );
};

export default Session06;
