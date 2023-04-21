import React, {useState, useContext} from 'react'
import {MdCancel, MdDownloadDone} from 'react-icons/md'
import { TaskContext } from '../Context'

import {BiEdit} from 'react-icons/bi'
// import { openEditForm } from '../utiliy'


// import {AiOutlineFileDone} from 'react-icons/ai'

function Tasks({id, Urgent,title, details, status, date, time }) {
const [more, setMore] = useState(false)
const {handleDispatch,state, formDataReset, NewAddCont, setOpenEdit, setOpenModal, openModal, setEditId} = useContext(TaskContext)


//=======edit form=======

const openEditForm = (id)=>{

    const editingTask = state.allTasks.find(t => t.id === id)

    const {title:formTitle ,details:formDetails, Urgent:formUrgent} = editingTask


    //====== updating form input with editing task data=============

    formDataReset(formTitle,formDetails,formUrgent)
    setEditId(id)
    setOpenEdit(true) //======shows edit button and also when true edit task
    setOpenModal(!openModal)

}

//================

//======delete and complete

const delComp = (actionType, id)=>{
    if(actionType === 'delete'){
        handleDispatch( actionType, id)
        NewAddCont(`${actionType}d 🖊`)
    } //======delete=======


    // ===========

    if(actionType === 'complete'){
        handleDispatch( actionType, id)
        NewAddCont(`${actionType}d ✔`)
    } //=======complete======

}




// console.log(Urgent);

  return (
    <article draggable key={id}  className='my-3 bg-slate-700 p-1 px-2 flex flex-col rounded-lg'>
        <div className="flex justify-end items-center border-b-2 border-dotted border-sky-800 py-2">
           {Urgent && status ==='pending' && <span className="bg-red-800 text-[.72rem] p-1 px-3 mx-3 rounded-xl">
                Urgent
            </span>}

<article className='self-end flex justify-around items-center gap-6'>


           

          { status === 'pending' && <button onClick={()=>openEditForm(id) } className={`hover:text-green-500`} >
                <BiEdit/>
            </button>}

            <button 
            onClick={
                ()=> delComp( 'delete', id)
            }
            className='text-white-500 p-1 hover:text-red-600 self-end'>
<MdCancel/>
            </button>


</article>



        </div>
<div className="py-1">
    <small className='text-cyan-500'>Title:</small>
    <p className='text-[0.95rem]'>  {title} </p>
    <small className='text-cyan-500'>Details</small>
    <p className='my-2 text-[0.90rem] break-words'>{more && details ||!more && details.slice(0,10)}
    <button className='text-cyan-600 underline text-xs' onClick={()=>setMore(!more)}>...{more ? 'less' : 'more'}</button>
    </p>


</div>

<div className="date-done w-full mx-auto p-1 flex justify-between items-center">

<span className="text-[.75rem]">
    {date}
    <br />
    {time}
</span>

{ status ==='pending' && 
<button onClick={
    ()=> delComp( 'complete', id)
} className='text-white-500 p-2 my-2 bg-green-700 self-end px-5 hover:bg-green-800 transition-all rounded-lg'>
<MdDownloadDone/>
</button>}

</div>



    </article>

    )
}

export default Tasks