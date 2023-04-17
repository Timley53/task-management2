import React, {  useReducer} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {BsListColumns } from 'react-icons/bs'
import {HiMenuAlt2 } from 'react-icons/hi'
import {RiPlayList2Fill } from 'react-icons/ri'
import {RxCross1 } from 'react-icons/rx'
import { useState } from 'react'
import { TaskContext } from '../Context'
import Form from '../Compnents/Form'


let store
let parse = JSON.parse(localStorage.getItem('store')) 



if(parse){
  store =  JSON.parse(localStorage.getItem('store')) 
} else{
 store = {
  allTasks:[],
  past:[],
  // pending(){

  //   return this.allTasks.filter(itm =>  itm.status === 'pending' )
  // }
 
}
}







// {
//   allTasks:[],
//   past:[],
 
// }

// export const widgetContext = createContext()



//reducer
const reducer = (state, action) => {

    if(action.type === 'complete'){

const objStore = {
  ...state,
  past:[...state.allTasks],
  
  allTasks:state.allTasks.map(ts => {
  if(ts.id === action.payload.Id){
    return {...ts, status:'completed'}

  }

  return ts
  

}),



}


localStorage.setItem('store',JSON.stringify( objStore) )


      return objStore
      } //=====complete=======>
  
      


    if(action.type === 'delete'){

const objStore =  {
  ...state,
  past:[...state.allTasks],
  
  allTasks:state.allTasks.filter(ts =>
   ts.id !== action.payload.Id
    ),
  
  }

    localStorage.setItem('store',JSON.stringify( objStore) )

    return objStore   

      } //=====delete=======>
  




    if(action.type === 'add new'){

const objStore = {
  
    ...state,
  past:[...state.allTasks],

  
  allTasks:[...state.allTasks,action.payload],
// pending:state.allTasks.filter(map => map.status === 'pending') 


} 

// console.log(objStore);

  localStorage.setItem('store',JSON.stringify( objStore) )

return objStore



      } //=====add new=======>
  
  
    if(action.type === 'edit'){


const objStore = {
  
  ...state,
  past:[...state.allTasks],
  
  allTasks:state.allTasks.map(t =>{
    if(t.id === action.payload.id){
      return{...t, ...action.payload}
    }  
    
    return t
  }),
  
}

localStorage.setItem('store',JSON.stringify( objStore) )

return objStore

      } //=====edit=======>
  
  if(action.type === 'undo'){

    const objStore = { ...state, allTasks: [...state.past]}

    localStorage.setItem('store',JSON.stringify( objStore) )

    return objStore
  }//====undo====

      
   return state
      
  }
  
  






// =============================

//============================

//========================

function RootLayout() {



  // =========================
  // =========================
    const [open, setOpen] = useState(false)
    const [widget, setWidget] = useState(false)
    let trasn = open ? '-translate-y-0' : '-translate-y-96' 
    let widg = widget ? '-translate-x-0' :'-translate-x-[24rem]'




    //=========form======
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [urgent, setUrgent] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [editId, setEditId] = useState('')
 
    // console.log(trasn);
    

// ==================>
const formDataReset = (title,details, urgent) =>{
  setTitle(title)
  setDetails(details)
  setUrgent(()=>{
    return urgent ? urgent: false
  })
}

// ===============>


const [state, dispatch] = useReducer(reducer, store)

console.log(state);
// console.log(store);


// const [pendingList, setPendingList] = useState(state?.allTasks.filter(map => map.status === 'pending'))

// const pendingList = state.allTasks.filter(map => map.status === 'pending')//pending




// const [completedList, setCompletedList] = useState(state?.allTasks.filter(map => map.status === 'completed'))

// const completedList = state.allTasks.filter(map => map.status === 'completed')//complete


// const [urgentList, setUrgentList] = useState(state?.allTasks.filter(map => map.Urgent === true && map.status === 'pending'))

// const urgentList = state.allTasks.filter(map => map.Urgent === true && map.status === 'pending')//urgent


// console.log(state);



//========handleaction==========
const handleDispatch = (actionType, id,load)=>{
console.log(actionType, id,load);


// ====for add new tasks
    if(actionType === 'add new'){
        dispatch({type:actionType, payload:load}) 

        return
    }


    // ====for edit tasks
    if(actionType === 'edit'){
        dispatch({type:actionType, payload:load}) 

        return
    }

    //=====for undo=======

    if(actionType === 'undo'){
      dispatch({type:actionType})

      return
    }


    // ====for delete and complete====

  dispatch({type:actionType, payload:{Id:id}})

}

// ===========Modal & form= =====>
const [openModal , setOpenModal] = useState(false)

const [NewTaskAdd, setNewTaskAdd] = useState('')

const NewAddCont = (newAction)=>{
    setNewTaskAdd(newAction)
    
    
  }
  

  return (
    
<TaskContext.Provider value={{state, handleDispatch, widg,setOpenModal, openModal , NewTaskAdd, setNewTaskAdd, NewAddCont, title,setTitle,details,setDetails,urgent,setUrgent,formDataReset, openEdit, setOpenEdit,editId, setEditId }}>


<>

    <div className="task-management text-slate-300 bg-slate-900 h-[100vh] "> 
        <header>
            <nav className='flex justify-between w-screen p-2 bg-slate-800 fixed top-0 py-4 z-50'>
                <h2 className='mx-5 flex items-center text-white-500 text-lg '>  <BsListColumns/>  &nbsp; Doings</h2>

                <div className="w-30">

    <button onClick={()=>setWidget(!widget)} className='md:hidden text-2xl p-2 self-center '>  
<RiPlayList2Fill/>
    </button>

                <button onClick={()=>setOpen(!open)} className='md:hidden p-2 text-2xl mx-4'>
                  {
                    !open && <HiMenuAlt2/> || open && <RxCross1/>
                }
                  
                {/* <HiMenuAlt2/> */}
                  
                  </button>

                </div>

                <ul className={`absolute left-0 top-14  md:flex md:static md:w-auto bg-slate-800 w-full  md:px-2 transition-all ${trasn} md:-translate-y-0`}  >


                    <li className='md:text-base block p-3  p-3 md:px-3 md:py-1 md:mx-3 hover:text-green-300 md:py-1 my-4 text-xl md:m-0'> 
                        <NavLink to='/'>Home</NavLink>
                    </li>

                    <li className='md:text-base md:px-md:py-1 md:mx-3  p-3 hover:text-green-300 md:py-1  my-4 text-xl md:m-0'>
                        <NavLink to='/developer'>Developer</NavLink>
                    </li>

                    {/* <li className='md:text-base md:px-3 md:py-1 p-3 md:mx-3 hover:text-green-300   my-4 text-xl md:m-0'>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li> */}


    {/* <button className='md:mx-4 md:px-5 md:py-1 text-1xl text-slate-300 bg-blue-900 rounded hover:bg-blue-600  my-2 md:m-0 px-3 mx-3 py-1 text-3xl'><AiOutlineAppstoreAdd/></button> */}



                </ul>

            </nav>
        </header>

        {/* modal */}
{ openModal &&
<Form/>}


        <main className='md:h-auto      md:mt-[4rem] mt-[4.45rem] overflow-auto '>

            <Outlet/>
        </main>
    </div>
    </>
    </TaskContext.Provider>
  )
}

export default RootLayout