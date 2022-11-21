import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Questions from "../components/Questions";
import db from "../db.json";

const Cliente = () => {
  const { cliente } = useParams();

  const data = db.find((d) => d.cliente === cliente);

  const transcripcion = data.transcripcion.split("<br>");

  return (
    <Layout>
      <div className="w-10/12 h-auto mt-36 md:mt-46 flex flex-col gap-8 text-white">
        <h1 className="font-bold text-4xl uppercase">{data.cliente}</h1>
        <h2 className=" text-3xl">Testeador {data.cliente}</h2>
        <video src={data.linkVideo} className="max-w-full" controls></video>
        <h2 className=" text-3xl">Transcripción</h2>
        <div className="md:w-3/6 w-full h-[300px] overflow-auto">
          {transcripcion.map((t, i) => (
            <p key={i} className="text-white ">
              {t}
            </p>
          ))}
        </div>
        <h2 className=" text-3xl">Tareas</h2>
        <div className="w-full md:w-3/6">
          <p className="font-semibold">Escenario: {data.escenario}</p>
          {data.preguntas.map((pregunta, i) => (
            <Questions pregunta={pregunta} i={i} key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Cliente;
