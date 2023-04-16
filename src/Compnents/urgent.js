import React,{useContext} from 'react'
import { TaskContext } from '../Context'
import Tasks from './Tasks';
import { HeaderType, NoTask } from './small-components';



function Urgent() {
    const {urgentList, state} = useContext(TaskContext)
    // console.log(urgentList);
    
    const urgentNo = state.allTasks.filter(map => map.Urgent === true && map.status === 'pending').length
    
    return (
    <div className="h-auto w-full p-2 rounded-xl">



<HeaderType
    length ={urgentNo}

Type={'Urgent'}
 color={'red'}
  />
        

        <div className="   
        Urgent af 
       grid-rows-fill 
        md:grid-cols-3 mt-2 rounded xl:grid-cols-4 md:w-full w-[95%] mx-auto grid gap-4 h-auto 
        ">
          {

          state.allTasks.filter(tsk => {
            return tsk.Urgent === true && tsk.status === 'pending'
          }).length < 1 && <NoTask/> ||
          
          state.allTasks.filter(itm =>itm.Urgent === true && itm.status === 'pending' ).map(task =>{
            const {id} = task

            return(
              
              <Tasks key={id} {...task}/>
            
            )
          })}

        </div>

         
    
</div>
)
}

export default Urgent

// 'grid-rows-fill grid-rows-fit grid-cols-fill grid-cols-fit'