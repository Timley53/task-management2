import React, {useContext} from 'react'
import { TaskContext } from '../Context'
import {RxCross1 } from 'react-icons/rx'

// const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


function Form() {
    const {handleDispatch, openModal , setOpenModal, NewAddCont,title,setTitle,details,setDetails,urgent,setUrgent, formDataReset, openEdit, setOpenEdit, editId} = useContext(TaskContext)
    
    const current = new Date();
   
    // const [invalid, setInvalid] = useState(false)

    

    const formatTime = ()=>{
      const  hour =  current.getHours() > 12 ? current.getHours() - 12   + '' : current.getHours()  + ''

      const  minutes =  current.getMinutes() + ''

      return `${hour.padStart(2,0)}:${minutes.padStart(2,0)} ${current.getHours() > 12 ? 'pm' : 'am'} `
    }
    

    // handleDispatch

    const addNewTask = (e)=>{
       e.preventDefault()

if(openEdit){

handleDispatch('edit','', {
    id:editId,title,details,Urgent:urgent
})
NewAddCont('Edited ✔')
setOpenModal(!openModal)
formDataReset('','')
setOpenEdit(false)
return
}



       handleDispatch('add new','',{
        title,details,
        Urgent:urgent,
        status: 'pending',
        id: Date.now().toString(),
         date:`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`,
         time:formatTime()

       })
       NewAddCont('New Task Added ✔')
       setOpenModal(!openModal)
       formDataReset('','')
    }

    const hollowGreeen = urgent ? 'bg-transparent' : 'bg-green-600'

  return (

    <div className={`fixed left-0 top-0 z-[60] place-items-center h-screen w-screen grid bg-transparent backdrop-blur`}>

<form onSubmit={addNewTask
} className="bg-slate-800 flex flex-col items-center md:w-[40%] lg:w-[30%] w-[90%] p-2 rounded-md border-2 border-solid border-green-900 h-auto">

<header className='flex w-full mx-auto justify-between items-center p-2 border-solid -border-slate-300 borer-b-2'>
<span>
    Fill in details of new task
</span>


<span onClick={() =>{
    formDataReset('','')
    setOpenEdit(false)
    setOpenModal(!openModal)}}  className='text-green-600 p-3 hover:text-red-700 cursor-pointer'>
    <RxCross1/>
</span>
</header>

<label className='flex flex-col w-[90%]  items start' htmlFor="">
    <div>Title</div>
<input
value={title}
placeholder='Task Title '
onChange={(e) =>{
    setTitle(e.target.value)

} }
type="text" required className={`w-full my-1 bg-transparent
focus-within:outline focus-within:outline-2  
p-1
outline outline-2 outline-green-800  

${!title ? 'focus-within:outline-red-800' : 'focus-within:outline-green-800'}

 rounded-md `} />
  



    
</label>

<label className={`flex w-[90%] my-2 mb-3 flex-col items start`}

>
<div>Details</div>

<textarea value={details} 
placeholder='Write Task Details here '

onChange={(e)=> setDetails(e.target.value)}

 className='w-full p-1 my-1 bg-transparent border-2 border-green-800 rounded-md ' 
  name=""
   id=""
    cols="30"
    rows="6">

    </textarea>

</label>

<article className='my-6 ' >
    Priority :
<span 


onClick={() =>{
    if(!urgent)return

    
    setUrgent(!urgent)}

}


className={`${hollowGreeen} cursor-pointer  border-2 border-green-600 hover:bg-green-700 rounded p-2 mx-2`}>
    Normal
</span>

<span 
onClick={() =>{
    if(urgent)return
    
    setUrgent(!urgent)}

}

className={`p-2 mx-2 
rounded
cursor-pointer

 ${urgent ? 'bg-red-500' : 'bg-transparent'}  

hover:bg-red-800
 border-2 
 border-red-800`}>
    Urgent
</span>
</article>




{!openEdit && <button className='bg-green-800  p-2 hover:bg-transparent border-2 border-green-800 my-6 w-full rounded mx-auto  hover:text-green-600 '>
    Add new task 
</button> || openEdit && <button className='bg-yellow-800  p-2 hover:bg-transparent my-6 w-full rounded mx-auto border-2 border-yellow-800 hover:text-yellow-600 '>
    Edit Task 
</button>} 

</form>


</div>
    )
}

export default Form