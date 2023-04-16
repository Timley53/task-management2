import { GrAdd } from "react-icons/gr";
import { useContext } from "react";
import { TaskContext } from "../Context";
import {GoTasklist} from "react-icons/go"

export function HeaderType({Type,length,color}){
    // console.log(color);
    const {openModal,setOpenModal} = useContext(TaskContext)


    
    return(
        <article className='mx-auto w-50 self-start border-solid text-[0.85rem] inline mt-1 
        p-2     text-center'>
    
          <button className={`bg-${color}-600 text-md px-3 p-2  relative  rounded-md`}>
            {Type}
    <span className="absolute right-[-.5rem] top-[-.8rem] bg-red-800 p-1 px-2 text-[.7rem] rounded-full">{length}</span>
          </button>
    
    <button onClick={() => setOpenModal(!openModal)} className='add-task bg-green-800 hover:bg-green-900
    border-solid  border-2
    border-green-800 
       
        mx-3 p-2 px-3
         rounded-md 
          inline-block'>
      <span className='mx-2 text-white-500'>
      Add task
      </span>
      <GrAdd/>
    </button>
    
            </article>
    )
}

export function NoTask(){
  return (
    <div className="md:w-[52rem] w-[98%] mt-[3rem] h-[50vh] flex items-center text-center ">

       
       <h2 className='text-2xl mx-auto text-[2rem] flex items-center justify-center  center '><GoTasklist/>  No Task</h2>
    </div>
  )
}