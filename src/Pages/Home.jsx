import React from "react";
import { Header } from "../Components/Header";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <section className="header-bg ">
      <Header></Header>
      <main className="home-container ">

      <section className=" my-[4rem] lg:mx-[2rem]">
        <h4 className=" text-[25px] capitalize text-center text-white font-semi-bold lg:text-left">
          SO, YOU WANT TO TRAVEL TO
        </h4>
        <h2 className=" text-[5rem] text-center text-white font-semi-bold
        md:text-[10rem]
         lg:text-[10rem] lg:text-left lg:mt-[-2rem]">
          SPACE
        </h2>
        <p className="text-gray-300 text-center px-4 text-[14px] my-4 mb-5
         md:px-[8rem] md:text-center md:text-[18px] lg:w-[75%] 
        lg:text-left">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section className=" flex justify-center lg:my-[5rem]">
        
        <p className="text-center text-[25px] font-medium cursor-pointer  animate-pulse bg-slate-100 w-[10rem] h-[10rem]
        lg:h-[20rem] lg:w-[20rem] rounded-[50%] py-[3.5rem] lg:text-center lg:pt-[7rem] lg:text-[50px] lg:font-normal ">
        <Link to ="/Destination">Explore</Link>
        </p>
      </section>
      </main>
    </section>
  );
};

export default Home;
