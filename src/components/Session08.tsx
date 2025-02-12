import "../styles/session08.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Session08 = () => {
  const textList = [
    {
      text: "Transforme sua atuação na APS!",
    },
    {
      text: "Aproveite condições especiais!",
    },
    {
      text: "Inscreva-se e garanta resultados incríveis!",
    },
  ]

  return (
    <div className="container-session08">
      <div className="header-session08-container">

        <h2 className="title-session08">
          Garanta sua vaga agora mesmo!</h2>
      </div>
      <p className="description-session08">
        A <strong>Mentoria NEAP</strong> vai te ajudar a ter mais{" "}
        <strong>confiança, eficiência e segurança</strong> nos seus
        atendimentos.
      </p>
      <ul className="list-session08">
        {textList.map((item, index) => (
          <li key={index}>
            <CheckCircleOutlineIcon className="checkIcon" fontSize="large"/>
            {item.text}</li>
        ))}
      </ul>
      <a className="cta-session08 " href="https://pay.hub.la/GC1ClKWRPjcY9HfX4aik" target="_blank">Inscrever-se agora</a>
    </div>
  );
};

export default Session08;
