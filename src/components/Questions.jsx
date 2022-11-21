import React from "react";

const Questions = ({ pregunta, i }) => {
  const question = pregunta.texto.split("\\n");
  console.log(question);
  return (
    <div className="border-t md:m-5 pt-5 mt-5 font-bold text-lg">
      <p>Tarea {i + 1}:</p>
      {question.map((q) => (
        <p>{q}</p>
      ))}

      <p className="font-normal mt-3">Respuesta: {pregunta.respuesta}</p>

      <p className="text-[#ff9a3e] font-normal mt-3">
        Duración de la tarea: {pregunta.tiempo}
      </p>
    </div>
  );
};

export default Questions;
