import React from 'react'
import {useState} from 'react';
import { Header } from '../Components/Header';
import Data from "../data.json";


const Crew = () => {
  const [crew] = useState (Data.crew)
  const [Value, setValue] = useState(0)
  const {name, images, bio, role,  } = crew[Value]


  return (

    <section className="Crew-bg">
        <Header></Header>
     <h2 className="text-gray-300 text-[1.0rem] my-2 text-center uppercase font-semibold 
     md:text-left md:text-[20px]
     lg:text-left lg:px-[9rem]" >
       <span className="mx-4  text-gray-400">02</span>  Meet your crew</h2>
       <section className='crew-container'>
        
       <main className='lg:order-1'>

      <section className="flex justify-center my-5  " >
        <div className="h-[260px] w-[200px]
        md:w-[350px] md:h-[500px]
         lg:h-[260px] lg:w-[300px]">
      <img src={images.png} alt=""
      className="block mx-auto w-[100%]"
      title={name}
      />
      </div>
      </section>
      </main>
      <article className='relative'>
        <ul className='flex justify-center lg:absolute lg:top-[20rem]'>
          {crew.map((item, index)=> (
            < li key={index} onClick ={() => setValue(index)} >
              <button className= { `text-gray-300  my-5 mx-4  text-[10px] rounded-[50%] h-4 w-4  lg:mt-[1rem]
              ${
                index === Value && " bg-gray-300"
              }`
            }
               >
                <span className=' '><i class="ri-checkbox-blank-circle-line"></i></span>
          
              </button>
            </li>
          ))}
        </ul>
        <section className='lg:mt-[0rem]'>
        <p className='text-gray-300 px-5 text-center text-[18px] uppercase lg:text-left lg:px-0 lg:'>{role}</p>
        <h2 className="text-center text-gray-300 text-[2.5rem] uppercase font-semibold lg:text-left lg:text-[3rem]">{name}</h2>
        <p className='text-gray-300 px-5 text-center text-[13px] 
        md:text-[18px] md:px-[6rem]
        lg:w-[65%] lg:text-left lg:px-0 lg:text-[15px]'>{bio}</p>
        <div className='border-b-[.1rem] text-gray-200 px-[2rem]  mx-6 my-9 lg:hidden'></div>
        </section>
       
      </article>
      
      </section>


    </section>
  

    
  )
}

export default Crew