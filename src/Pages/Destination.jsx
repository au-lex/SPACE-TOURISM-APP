import React from 'react'
import {useState} from 'react';
import { Header } from '../Components/Header';
import Data from "../data.json";


const Destination = () => {
  const [planents] = useState (Data.destinations)
  const [Value, setValue] = useState(0)
  const {name, images, description, distance, travel } = planents[Value]


  return (

    <div>
    
    <section className="Destination-bg">
        <Header></Header>
       <section className='Des-container ' >

        <article>
     <h2 className="text-gray-300 text-[1.0rem] text-center
      md:text-left  md:mt-4 uppercase font-semibold" >
       <span className="mx-4  text-gray-400">01</span>pick your Destination</h2>
      

      <section className="flex justify-center my-10  " >
        <div className=" w-[200px] lg:w-[400px] h-[200px] lg:mr-[5rem]
        md:w-[300px] md:h-[300px] ">
      <img src={images.png} alt=""
      className="block mx-auto w-[100%]  lg:mx-[2rem] animate-pulse "
      title={name}
      />
      </div>
      </section>
      </article>
      <article className=''>
        <ul className='flex justify-center '>
          {planents.map((item, index)=> (
            < li key={index}   onClick ={() => setValue(index)}>
              <button className= {`text-gray-300 md:text-[25px] mx-4 font-bold text-[15px] lg:mt-[2rem] ${
                index === Value && "border-b-[5px] border-white "
              }
                `} >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <div>
        <h2 className="text-center text-gray-300 text-[3.5rem] font-semibold lg:my-[2rem] lg:text-[6.2rem]">{name}</h2>
        <p className='text-gray-300 px-5 text-center text-[13px] md:text-[15px] lg:w-[100%] md:px-[8rem]' >{description}</p>
        <div className='border-b-[.1rem] text-gray-200 px-[2rem]  mx-6 my-9 lg:my-3'></div>
        </div>
        <ul className=" flex flex-col lg:flex-row  lg:ml-8 md:flex md:flex-row md:ml-[10rem]">
         
          <li className='text-center text-[2rem] text-gray-200 lg:mr-6 md:mr-6 '> 
          <span className='block  text-gray-400 text-[20px]'>Avg Disatnce</span>{distance}</li>
          <li className='text-center text-[2rem] text-gray-200 my-4 lg:my-0 md:my-0'>
             <span className='
             block text-gray-400 text-[20px] my-2 lg:my-0 md:my-0'>EST.TRAVEL.TIME</span>{travel}</li>
        </ul>
      </article>
      
      
      </section>


    </section>
  

    </div>
  )
}

export default Destination