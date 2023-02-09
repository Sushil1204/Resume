import React, { useEffect, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import project from "../utils/project";

const Projects = ({ portfolio }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(portfolio);
    console.log(data);
  }, [portfolio]);
  return (
    <div className="bg-sky-100">
      <section className="text-gray-600 body-font py-5">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-left w-full mb-20">
            <h1 className="sm:text-5xl text-4xl font-bold title-font mb-4 text-gray-900">
              My Projects
            </h1>
            <div className="h-1 w-80 bg-indigo-500 rounded"></div>
          </div>
          <div className="flex flex-wrap -m-4">
            {data.map((item, index) => {
              return (
                <div className="lg:w-1/3 sm:w-1/2 p-4" key={index}>
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={item.imgUrl}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                        {item.framework}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {item.title}
                      </h1>
                      <p className="leading-relaxed">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                      </p>
                      <a
                        href={item.link}
                        className="mt-2 text-indigo-500 inline-flex items-center"
                      >
                        Live link
                        <BiLinkExternal className="ml-2 text-xl" />
                      </a>
                    </div>
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

export default Projects;
