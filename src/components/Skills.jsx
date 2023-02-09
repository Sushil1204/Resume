import React from "react";
import stack from "../utils/stack";

const Skills = () => {
  return (
    <div className="bg-sky-100">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col text-left">
            <h1 className="sm:text-5xl text-4xl font-bold mb-2 text-gray-900">
              My Skills
            </h1>
            <div className="h-1 w-56 bg-indigo-500 rounded"></div>
          </div>
          <div className="flex flex-wrap -m-4 place-content-center">
            {stack.map((item, index) => {
              return (
                <div key={index} className="xl:w-max md:w-1/2 p-4">
                  <div className="border-2 border-indigo-600 p-6 rounded-lg">
                    <img src={item.icon} alt={item.name} className="w-24 h-24" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
