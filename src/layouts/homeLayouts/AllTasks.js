import React, {useContext} from 'react'
import Tasks from '../../Compnents/Tasks'
import { TaskContext } from '../../Context'


function AllTasks() {
  const {state} = useContext(TaskContext)
  // console.log(state);
  
  return (
    <div className="all-task flex lg:gap-5 md:gap-3 h-screen gap-3 lg:flex-nowrap pt-2 items-start md:flex-wrap">

        <div className="h-50 shrink    lg:max-w-xs w-1/3 md:w-2/5 p-2 rounded-xl">
            <h2 className='mx-auto border-solid border-sky-500 border-2 text-center'>
                Pending
                </h2>
                
    

                <div className="pending flex flex-col sr h-[82vh]  overflow-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-transparent scrollbar-thin 
                scrollbar-thumb-rounded-lg
                scrollbar-thumb-w-xs
                  scrollbar-track-rounded-lg
                  
                ">
                  {state.allTasks.filter(itm => itm.status === 'pending').map(task =>{
                    const {id} = task

                    return(
                      
                      <Tasks key={id} {...task}/>
                    
                    )
                  })}

                </div>


            
        </div>


        <div className="completed h-auto  shrink   lg:max-w-xs w-1/3 md:w-2/5 p-2 rounded-xl">
        <h2 className='mx-auto border-solid border-2 border-sky-500  border-sky-500 text-center'>
                Completed
                </h2>  

                <div className="flex flex-col sr h-[82vh]  overflow-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-transparent scrollbar-thin 
                scrollbar-thumb-rounded-lg
                scrollbar-thumb-w-xs
                  scrollbar-track-rounded-lg
                  
                ">
                  {state.allTasks.filter(itm => itm.status === 'completed').map(task =>{
                    const {id} = task

                    return(
                      
                      <Tasks key={id} {...task}/>
                    
                    )
                  })}

                </div>


                     </div>

        <div className="md:hidden lg:block urgent h-50 shrink   lg:max-w-xs w-1/3  p-2 rounded-xl">
        <h2 className='mx-auto border-solid border-2 border-sky-500 text-center'>
                Urgent
                </h2> 
                <div className="flex flex-col sr h-[82vh]  overflow-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-transparent scrollbar-thin 
                scrollbar-thumb-rounded-lg
                scrollbar-thumb-w-xs
                  scrollbar-track-rounded-lg
                  
                ">
                  {state.allTasks.filter(map => map.Urgent === true && map.status === 'pending').map(task =>{
                    const {id} = task

                    return(
                      
                      <Tasks key={id} {...task}/>
                    
                    )
                  })}

                </div>

                       </div>

    </div>
    
    
    )
}

export default AllTasks