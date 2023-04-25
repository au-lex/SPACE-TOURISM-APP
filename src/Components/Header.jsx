import React from "react";
import "../Components/styles/header.css";
import logo from "../logo.svg";
import menu from "../icon-hamburger.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  const menubar = ()=> {
    const menuicon = document.querySelector(".side-bar");
    const navlinks = document.querySelectorAll(".navlinks");
    menuicon.classList.toggle("active");
    navlinks.forEach((item)=> {
item.addEventListener("click", ()=> {
  menuicon.classList.remove("active")
})
    })
  }
  return (
    <header className=" relative ">
      
      <section className="flex  justify-between">
        <div className=" px-[15px] py-[25px]">
        <Link to="/Home">

          <img src={logo} alt="logo" className="lg:mx-[2rem] md:mx-[2rem] animate-spin" />
        </Link>
        </div>
        <div className=" px-[15px] py-[25px] " onClick={menubar}>
          <img src={menu} alt="menu" className=" h-6  lg:hidden md:hidden" />
        </div>
      </section>
      

      <section className="side-bar side-bar2  lg:backdrop-blur-[5px]">
        <ul className=" mt-[4rem] text-center
         font-medium lg:flex lg:mt-[-.5rem] lg:text-gray-200 lg:text-[.8rem] lg:space-x-[2rem] lg:mx-[4rem]
          md:text-gray-200 md:text-[.9rem] md:flex g:flex md:mt-[-.5rem] md:space-x-[2rem] md:mx-[4rem]">
        <li className="navlinks"><Link to ="/Home">00 HOME</Link></li>
        <li className="navlinks"><Link to ="/Destination">01 DESTINATION</Link></li>
        <li className="navlinks"><Link to ="/Crew">02 CREW</Link></li>
        <li className="navlinks"><Link to ="/Technology">03 TECHNOLOGY</Link></li>
        </ul>
      </section>
         

      

    
    </header>
  );
};
