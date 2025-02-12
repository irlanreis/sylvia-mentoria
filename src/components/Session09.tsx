import { useState } from "react";
import "../styles/session09.css";

const Session09 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faq = [
    {
      question: "Como são os encontros com a mentora?",
      answer:
        "Os encontros serão realizados a cada 15 dias, no formato on-line e sala secreta pelo meet. O link será enviado no grupo de whatsapp da Mentoria NEAP.",
    },
    {
      question: "Sou estudante de medicina, poderei participar?",
      answer:
        "A mentoria é exclusivamente para Médicos já graduados e que estejam atuando na APS. No entanto, poderemos abrir exceções caso o estudante esteja no internato médico e no rodízio de saúde comunitária/ medicina da família e comunidade.",
    },
    {
      question: "Como funciona a comunidade?",
      answer:
        "A comunidade da Mentoria NEAP, além de ser  um espaço seguro para discutir suas dúvidas, traz possibilidade de networking. Encontrar a sua “tribo” e conversar com pessoas que vivenciam uma rotina semelhante e que buscam exercer uma medicina baseada em evidências em um ambiente de atualização e estudo constantes forma uma enorme rede de apoio que traz mais segurança ao mentorado. Venha vivenciar o poder da ambiência!",
    },
    {
      question: "Caso não possa participar do encontro ao vivo, terei acesso?",
      answer:
        "Os encontros ficarão gravados e serão hospedados em uma plataforma na qual você terá acesso por 1 ano.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container-session09">
      <h2 className="title-session09">Dúvidas Frequentes</h2>
      {
        <div className="faq-section">
          {faq.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{item.question}</div>
              {openIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      }
      <a
        className=" btn-session09"
        href="https://pay.hub.la/GC1ClKWRPjcY9HfX4aik"
        target="_blank"
      >
        QUERO PARTICIPAR
      </a>
    </div>
  );
};

export default Session09;
