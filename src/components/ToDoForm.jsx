import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";

function ToDoForm({ dimmed }) {
    


  return (
    <section className={dimmed ? "opacity-40 pointer-events-none" : ""}>
      <div className='flex flex-row justify-center space-x-3 mx-6 '>
        <form action="" className='relative w-full '>
          <input 
            type="text" 
            id="todolist_input" 
            placeholder='Search note...'
            className='outline-2 outline-offset-2 outline-cyan-200 rounded-lg w-full pl-3' 
          />
          <CiSearch 
            className='absolute right-2 top-1/2 -translate-y-2/3'
            size={20}
          />
        </form> 
        <select className='h-6 rounded-lg outline-3 outline-offset-2 outline-double outline-cyan-200'>
          <option value="all">All</option>
          <option value="not done">Not Done</option>
          <option value="done">Done</option>
        </select>
        <MdOutlineWbSunny
          className="h-8 w-10 -translate-y-1/6 p-2 bg-[var(--cyan)] rounded-lg flex items-center justify-center"
        />
      </div>
    </section>
  )
}

export default ToDoForm
