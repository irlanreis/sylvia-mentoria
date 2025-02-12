import Session05 from "./Session05";
import "../styles/session05Main.css"
import Session06 from "./Session06";

const Session05Main = () => {
  return (
    <div className="container-session05Main">
      <div className="content-session05Main">
      <Session05/>
      <Session06/>
      </div>
       <div className="text-session05Main-container">
        <p>
          Transforme sua prática clínica com <strong className="destaque">8 encontros on-line</strong>, suporte da sua
          mentora <strong className="destaque">durante 4 meses</strong> e acesso à comunidade <strong className="destaque">diariamente!</strong>
        </p>
        <a className="btn-session05Main" href="https://pay.hub.la/GC1ClKWRPjcY9HfX4aik" target="_blank">Inscrever-se!</a>
      </div>
    </div>
  )
}

export default Session05Main;