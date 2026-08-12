import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { FcNeutralDecision } from "react-icons/fc";
function ToDoList() {
         const[OpenNewNote,setOpenNewNote]=useState(false)

         
  return (
    
    <section className='relative flex flex-col items-center mt-10'>
         {OpenNewNote && (
            <form className='w-2/3 h-full p-3 space-y-4 rounded bg-[var(--bg)] outline-2 outline-offset-3 outline-cyan-200'>
                <h1 className='block text-center'>NEW NOTE</h1>
                <div className='flex flex-col my-10 gap-4'>
                <input type="text" id="newnote" placeholder='input your note...'
                className='rounded outline-2 outline-cyan-200 outline-offset-2 px-2
                 focus:outline-red-200 '/>
                <input type="time" id="alarm" placeholder='set alarm'
                className='rounded outline-2 outline-cyan-200 outline-offset-2 px-2
                focus:outline-red-200'/>
                </div>
             
                <div className='flex justify-between '>
                <button className='bg-white text-black p-2 rounded-lg hover:bg-cyan-100 hover:text-cyan-900 '>CANCEL</button>
                <button className='bg-white text-black p-2 rounded-lg hover:bg-cyan-100 hover:text-cyan-900 '>APPLY</button>
                </div>
               
            </form>
         )}
         {!OpenNewNote && (
            <>
             <img src="/images/empty-todo.png" alt="" 
        className='flex justify-center items-center '/>
        <div className='flex items-center px-1 m-2 '>
         <p>it is empty lazy boy!!</p>
        <FcNeutralDecision />
        </div>
            </>
         )}
       
        
      <FaPlusCircle className='absolute top-100 right-9 -translate-y-1/6' 
      onClick={()=>setOpenNewNote(true)}/>
    </section>
  )
}

export default ToDoList
