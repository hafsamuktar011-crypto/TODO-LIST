import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { FcNeutralDecision } from "react-icons/fc";
import ToDoItems from './ToDoItems';

function ToDoList({openNewNote,setOpenNewNote,addTodo ,brightMode}) {
         const [note, setNote] = useState("");
         const [alarm, setAlarm] = useState("");
         const [showEmptyImage,setShowEmptyImage]=useState(true)


         const handleApply = (e) => {
           e.preventDefault();
         
           addTodo({
             note,
             alarm
           });
         
           setOpenNewNote(false);
           setShowEmptyImage(false)
         };


  return (
    <section className='relative flex flex-col items-center mt-10'>

      {!openNewNote && showEmptyImage && (
        <>
          <img src={brightMode ? "/images/Detective-check-footprint.png" 
            : "images/Detective-check-footprint-dark.png"
             } 
            className='flex justify-center items-center '/>
          <div className='flex items-center px-1 m-2 '>
            <p>it is empty lazy boy!!</p>
            <FcNeutralDecision />
          </div>
        </>
      )}
       
      {openNewNote && (
        <form className={` w-2/3 h-full p-3 space-y-4 rounded 
        bg-[var(--bg)] outline-2 outline-offset-3 outline-cyan-200
         ${ brightMode ? "bg-[var(--bright-bg)] text-[var(--bright-text)] outline-7 outline-offset-7" : "bg-[var(--bg)]" }`} 
         
            onSubmit={handleApply}>
          <h1 className='block text-center'>NEW NOTE</h1>
          <div className='flex flex-col my-10 gap-4'>
            <input 
              type="text" 
              value={note}
              onChange={(e)=>setNote(e.target.value)}
              placeholder='input your note...'
              className='rounded outline-2 outline-cyan-200 outline-offset-2 px-2 focus:outline-red-200'
            />
            <input 
              type="time" 
              value={alarm}
              onChange={(e)=>setAlarm(e.target.value)}
              placeholder='remind me'
              className='rounded outline-2 outline-cyan-200 outline-offset-2 px-2 focus:outline-red-200'
            />
          </div>
          <div className='flex justify-between '>
            <button type='button' 
            className='bg-white text-black p-2 rounded-lg hover:bg-cyan-100 hover:text-cyan-900 '
            onClick={()=>setOpenNewNote(false)}>CANCEL</button>
            <button type='submit'
             className='bg-white text-black p-2 rounded-lg hover:bg-cyan-100 hover:text-cyan-900 '>APPLY</button>
          </div>
        </form>
      )}
        
      <FaPlusCircle 
        className='absolute top-100 right-9 -translate-y-1/6 '
        size={34} 
        onClick={() => setOpenNewNote(true)}
      />
    </section>
  )
}

export default ToDoList
