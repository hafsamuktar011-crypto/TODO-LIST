import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
function ToDoForm() {
  return (
    <section>
        <div className='flex flex-row justify-center space-x-3 relative'> 
          <input type="text" id="todolist_input" placeholder='Search note...'
          className='outline-2 outline-offset-2 outline-cyan-500 rounded-lg lg:w-full' />
          <CiSearch />
          <select>
            <option value="">All</option>
            <option value="">Not Done</option>
            <option value="">Done</option>
          </select>
          <MdOutlineWbSunny />
        </div>
      
    </section>
  )
}

export default ToDoForm
