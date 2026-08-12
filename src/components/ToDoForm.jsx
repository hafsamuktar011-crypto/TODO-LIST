import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
function ToDoForm() {
  return (
    <section >
        <div className='flex flex-row justify-center space-x-3 mx-6'>
            <form action="" className='relative w-full '>
                 <input type="text" id="todolist_input" placeholder='Search note...'
          className='outline-2 outline-offset-2 outline-cyan-500 rounded-lg w-full
          pl-3' />
          <CiSearch className='absolute  right-2 top-1/2 -translate-y-1/2'
          size={20}/>
                </form> 
         
          <select className=' bg-[var(--all-bg)] rounded-lg outline-3 outline-offset-2 outline-double outline-cyan-200'>
            <option value="all">All</option>
            <option value="not done">Not Done</option>
            <option value="done">Done</option>
          </select>
          <MdOutlineWbSunny />
        </div>
      
    </section>
  )
}

export default ToDoForm
