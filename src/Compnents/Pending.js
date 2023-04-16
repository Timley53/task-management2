import React,{useContext} from 'react'
import { TaskContext } from '../Context'
import Tasks from './Tasks';
import { HeaderType } from './small-components';
import { NoTask } from './small-components';


function Pending() {
    const {pendingList, state} = useContext(TaskContext)
    console.log(pendingList);


    const pendingNo = state.allTasks.filter(tsk => {
      return tsk.status === 'pending'
    }).length

    // if(pendingList.length > 1){
    //   console.log(pendingList,'opjdasjkdjk');
      
    // }
    
    
    return (
    <div className="h-screen w-full p-2 rounded-xl">



<HeaderType 
length ={pendingNo}
Type={'Pending'}
 color={'yellow'}
  />
        

        <div className="
        pending af grid-rows-fill 
        md:grid-cols-3 mt-2 rounded xl:grid-cols-4 md:w-full w-[90%] mx-auto grid gap-4 h-auto 
        
        ">
          { 
          
          
          state.allTasks.filter(tsk => {
            return tsk.status === 'pending'
          }).length < 1 && <NoTask/> ||
          
          state.allTasks.filter(tsk => {
            return tsk.status === 'pending'
          }).map(task =>{
            const {id} = task

            return(
              
              <Tasks key={id} {...task}/>
            
            )
          })

     
          
          
          }

        </div>

         
    
</div>
)
}

export default Pending

// 'grid-rows-fill grid-rows-fit grid-cols-fill grid-cols-fit'



// pending af grid-rows-fill 
// md:grid-cols-3 mt-2 rounded xl:grid-cols-4 md:w-full w-[23rem] mx-auto grid gap-4 h-auto 