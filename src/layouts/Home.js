import React,{ useReducer, useContext} from 'react'
import {TbUrgent} from 'react-icons/tb'
import {MdPendingActions} from 'react-icons/md'
import {BsWallet, BsCalendarCheck} from 'react-icons/bs'
import AllTasks from './homeLayouts/AllTasks'
import { TaskContext } from '../Context'
import Pending from '../Compnents/Pending'
import Completed from '../Compnents/Completed' 
import Urgent from '../Compnents/urgent'
import NewTaskAdded from '../Compnents/NewTaskAdded'


// ==========>




const showTypeReducer = (state, action)=>{

  if(action.type === 'allTasks'){

    return {
      ...state,
      showAllTasks: true,
      showPending: false,
      showCompleted: false,
      showUrgent: false
    }


  }
  if(action.type === 'pending'){

    return {
      ...state,
      showAllTasks: false,
      showPending: true,
      showCompleted: false,
      showUrgent: false
    }


  }
  if(action.type === 'completed'){

    return {
      ...state,
      showAllTasks: false,
      showPending: false,
      showCompleted: true,
      showUrgent: false
    }


  }

  if(action.type === 'urgent'){

    return {
      ...state,
      showAllTasks: false,
      showPending: false,
      showCompleted: false,
      showUrgent: true
    }


  }

  return state


}



function Home() {
  const {widg, NewTaskAdd, setNewTaskAdd} = useContext(TaskContext)
  // console.log(widg);
  



const [showType, dispatchShowType] = useReducer(showTypeReducer, {
  showAllTasks: false,
  showPending: true,
  showCompleted: false,
  showUrgent: false
})

// useEffect(() => {
//     const timer =  setTimeout(()=>{
//    setNewTaskAdd(false)
// },4000)


// return () => clearInterval(timer)
// }, [NewTaskAdd])




return (


   <section className='w-100 h-screen flex gap-2'>
{ NewTaskAdd &&   <NewTaskAdded NewTaskAdd={NewTaskAdd} setNewTaskAdd ={setNewTaskAdd}/>}

    {/* <div className="fixed left-0 top-0 w-screen h-screen z-[63] bg-red-700">

</div> */}

    <div className={`md:-translate-x-0 fixed bg-slate-700  ${widg}  transition-all  h-screen span  md:h-full w-[7rem] md:w-[12rem] items-center flex flex-col md:p-3`}>


    <article
      onClick={()=>dispatchShowType({type:'allTasks'})} 
    
    className={`hidden md:flex md:w-[8rem] align-center  justify-between my-5 hover:bg-slate-500 py-1 px-2  text-white-900 rounded`}>
<button className='text-2xl md:text-lg'>
  <BsWallet/>
  
</button>

<button className='hidden md:inline'>
 All Tasks
</button>

    </article >



    <article 
     onClick={()=>dispatchShowType({type:'pending'})} 
    
    className={`flex align-center py-1 justify-between my-5 hover:bg-yellow-500 py-1 px-2  text-white-900 rounded md:w-[8rem]`}>

<button className='text-2xl md:text-2xl'>
  <MdPendingActions/>
  
</button>

<button className='hidden md:inline'>
 Pending
</button>

    </article >



    <article
    
    onClick={()=>dispatchShowType({type:'completed'})} 

    className={`flex align-center py-1 justify-between  my-5 hover:bg-green-600 py-1 px-2 md:w-[8rem]  text-white-900 rounded `}>

<button className='text-2xl md:text-lg'>
  <BsCalendarCheck/>
  
</button>

<button className='hidden md:inline'>
 Completed
</button>

    </article >


    {/* 
    
    urgeent
    */}

    <article 
    
    onClick={()=>dispatchShowType({type:'urgent'})} 


    className={`flex align-center md:w-[8rem] justify-between   my-5 py-1 px-2  text-white-900 rounded hover:bg-red-500`}>
<button className='text-2xl md:xl'>
  <TbUrgent/>

</button>

<button className='hidden md:inline'>
 Urgent
</button>

    </article >


    </div>

    <div className="w-full md:mt-[1rem] mt-[1rem]  h-screen md:ml-[13rem] lg:ml-[13rem] xl:ml-[13rem]  ">
{showType.showAllTasks && <AllTasks/> || showType.showPending && <Pending/> || showType.showCompleted && <Completed/> || showType.showUrgent && <Urgent/>}
      
    </div>
  


   </section>


  )
}

export default Home