import React from "react";
import { useState } from "react";
import { Header } from "../Components/Header";
import Data from "../data.json";

const Technology = () => {
  const [Technology] = useState(Data.technology);
  const [Value, setValue] = useState(0);
  const { name, images, description } = Technology[Value];

  return (
    <div>
      <section className="Techo-bg">
        <Header></Header>
        <section className="tech-container relative">
          <h2 className="text-gray-300 text-[1.0rem] my-2 text-center uppercase font-semibold 
           md:text-left md:my-4 lg:absolute">
            <span className="mx-4  text-gray-400">03</span> Space launch 101
          </h2>

          <section className="flex justify-center my-4  
          lg:justify-start order-1 md:mt-[6 rem]">
            <div className="h-[160px] w-[400px] md:h-[350px] md:w-[800px] ">
              <img
                src={images.landscape}
                alt=""
                className="block mx-auto w-[100%] lg:hidden"
                title={name}
              />
              <img
                src={images.portrait}
                alt=""
                className="tech-img w-[100%] lg:block lg:order-1 lg:mt-[4rem]"
              />
            </div>
          </section>
          <article>
            <ul className="flex justify-center lg:absolute lg:block lg:left-[2rem] lg:mt-[9rem] ">
              {Technology.map((item, index) => (
                <li key={index} onClick={() => setValue(index)}>
                  <button
                    className={`text-gray-300  my-[1px] mx-4  text-[10px] rounded-[50%] h-4 w-4 lg:h-6 lg:w-6
              lg:text-[20px] lg:my-5
              ${index === Value && " bg-gray-300"}`}
                  >
                    <span className=" ">
                      <i class="ri-checkbox-blank-circle-line"></i>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <section className=" lg:mt-[8rem] mt-3">
              <h4 className="uppercase font-normal text-center mb-[-1rem] md:text-[18px]  text-gray-300 text-[13px] ">
                {" "}
                the technology
              </h4>
              <h2 className="text-center text-gray-300 text-[2.5rem] 
              my-2 font-semibold md:text-[4rem] lg:text-left lg:text-[4.5rem] lg:mt-[-1rem]">
                {name}
              </h2>
              <p className="text-gray-400 px-5 text-center text-[14px]
              md:text-[20px] md:px-[4rem]
              lg:text-left w-[100%] lg:px-0 lg:text-[15px] lg:w-[80%]">
                {description}
              </p>
              <div className="border-b-[.1rem] text-gray-200 px-[2rem]  mx-6 my-9 lg:hidden"></div>
            </section>
          </article>
        </section>
      </section>
    </div>
  );
};

export default Technology;
