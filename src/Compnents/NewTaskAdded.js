import React,{useEffect, useContext} from 'react'
import { TaskContext } from '../Context'

function NewTaskAdded({NewTaskAdd, setNewTaskAdd}) {

  const {handleDispatch} = useContext(TaskContext)
  console.log(NewTaskAdd)

useEffect(()=>{
setTimeout(()=>{
  setNewTaskAdd('')
}, 5000)

},[])

  return (
    <div className={`${NewTaskAdd ? 'translate-[0%]' : 'translate-[100%]'} transition duration-1000 fixed right-6 bottom-3 text-white-700 text-[0.9rem]  w-auto md:w-auto bg-green-800 rounded-md p-2 `}>
{NewTaskAdd} <button className='p-1 rounded-lg bg-green-500 text-[0.7rem] px-2 ' onClick={()=>{
  setNewTaskAdd('')
  handleDispatch('undo')}}>Undo</button>
    </div>
  )
}

export default NewTaskAdded