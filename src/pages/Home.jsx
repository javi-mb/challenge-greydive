import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";
import db from "../db.json";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="min-h-screen flex items-start justify-center flex-col w-10/12 md:w-6/12 gap-8">
          {db.map((data, i) => (
            <div
              key={i}
              className=" w-full md:text-justify flex flex-col items-center gap-3"
            >
              <div className="text-white text-lg md:text-xl">
                <h1>
                  Si <span className="lowercase">{data.escenario[0]}</span>
                  {data.escenario.slice(1)}
                </h1>
              </div>
              <NavLink
                className="px-3 py-2 rounded bg-[#3c4c8f] text-white"
                to={`/${data.cliente}`}
              >
                Testear {data.cliente}
              </NavLink>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Home;
