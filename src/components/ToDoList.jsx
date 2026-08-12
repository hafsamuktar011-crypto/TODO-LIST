import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { FcNeutralDecision } from "react-icons/fc";
function ToDoList() {
         const[OpenNewNote,setOpenNewNote]=useState(false)

         

  return (
    
    <section className='relative flex flex-col items-center mt-10'>
        <img src="/images/empty-todo.png" alt="" 
        className='flex justify-center items-center '/>
        <div className='flex items-center px-1 m-2 '>
         <p>it is empty lazy boy!!</p>
        <FcNeutralDecision />
        </div>
        
      <FaPlusCircle className='absolute top-100 right-9 -translate-y-1/6' />
    </section>
  )
}

export default ToDoList
