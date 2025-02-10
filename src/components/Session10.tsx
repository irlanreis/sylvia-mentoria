import "../styles/session10.css";
import img from "../assets/depoimentos/01.jpg";
import img02 from "../assets/depoimentos/02.jpg";
import img03 from "../assets/depoimentos/03.jpg";
import img04 from "../assets/depoimentos/04.jpg";
import img05 from "../assets/depoimentos/05.jpg";
import img06 from "../assets/depoimentos/06.jpg";
import img07 from "../assets/depoimentos/07.jpg";
import img08 from "../assets/depoimentos/08.jpg";
import img09 from "../assets/depoimentos/09.jpg";
import img10 from "../assets/depoimentos/10.jpg";
import img11 from "../assets/depoimentos/11.jpg";
import img12 from "../assets/depoimentos/12.jpg";
import img13 from "../assets/depoimentos/13.jpg";
import img14 from "../assets/depoimentos/14.jpg";

const Session10 = () => {
  const allImgs = [
    img,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];

  return (
    <div className="container-session10">
      <h2 className="title-session10">O que nossos alunos dizem</h2>
      <div className="testimonial-session10">
        {allImgs.map((item, index) => (
          <img src={item} key={index} className="testemonion" />
        ))}
      </div>
    </div>
  );
};

export default Session10;
