import React,{useContext} from 'react'
import { GrAdd } from 'react-icons/gr';
import { TaskContext } from '../Context'
import Tasks from './Tasks';
import { HeaderType, NoTask } from './small-components';



function Completed() {
    const {completedList, state} = useContext(TaskContext)
    console.log(completedList);

    const completedNo = state.allTasks.filter(tsk => {
      return tsk.status === 'completed'
    }).length
    
    return (
    <div className="h-auto w-full p-2 rounded-xl">

        
<HeaderType length ={completedNo} Type={'Completed'} color={'green'}/>

   {     <div className="Completed  af grid-rows-fill 
        md:grid-cols-3 mt-2 rounded xl:grid-cols-4 md:w-full w-[90%]  mx-auto grid gap-4 h-auto  py-1
          
        ">
         {state.allTasks.filter(tsk => {
            return tsk.status === 'completed'
          }).length < 1 && <NoTask/> ||
          
          state.allTasks.filter(itm => itm.status === 'completed').map(task =>{
            const {id} = task

            return(
              
              <Tasks key={id} {...task}/>
            
            )
          })}

        </div>}

       
    
</div>
)
}

export default Completed

// 'grid-rows-fill grid-rows-fit grid-cols-fill grid-cols-fit'