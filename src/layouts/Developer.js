import React from 'react'
import {FaGithubSquare, FaTwitterSquare, FaMailBulk, FaWhatsappSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

let Img = require('../resources/t2.jpg')

function Developer() {
  return (

    <section className='mt-[1rem] flex flex-col md:flex-row w-screen'>

  <div className="w-[100%] flex items-center md:h-[80vh] md:w-[50%] p-4">
    
<img src={Img} className='circular-design my-auto  md:h-[80%] h-[50%] w-[60vw]  md:w-[25vw]' alt="" />

  </div>

  
         <div className="w-[100%] md:w-[50%]  flex flex-col p-2">

    <div className='m-auto'>

    <h2 className='text-2xl mx-auto text-center text-green-600 my-5'>Timileyin Muhammed Adedokun</h2>

    


     <p className='w-[80%] mx-auto'>
      
       A well driven front-end developer with a natural desire to grow and learn who excels at problem-solving and taking  on new challenges.
      
      </p>



    <div className="socials my-5 w-[60%] mx-auto  flex juistify-between text-2xl">

      <a href="https://github.com/Timley53">
    <button><FaGithubSquare/></button>
      </a>

    <a href="https://www.linkedin.com/in/timileyin-adedokun-35b36b219">

    <button><BsLinkedin/></button>

    </a>


    <a href="https://www.twitter.com/timley_kun">
    <button><FaTwitterSquare/></button>

    </a>
    <a href="mailto:kuntimmy@gmail.com">
    <button><FaMailBulk/></button>
    
    </a>

    <a href="https://wa.me/message/QF4ERDN5JIYUP1">
    <button><FaWhatsappSquare/></button>

    </a>
    </div>
      
    </div>


  </div>

</section> 

)
}

export default Developer