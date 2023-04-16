import React from 'react'
import {GoTasklist} from "react-icons/go"

function NoTask() {
  return (
    <div className="w-[30rem] h-[50vh] fixed  top-55 text-center grid place-items-center bg-red-800 ">

       
       <h2 className='text-lg mx-auto text-[2rem] flex items-center text-red-700 justify-center  center '><GoTasklist/>   No Task</h2>
    </div>
  )
}

export default NoTask