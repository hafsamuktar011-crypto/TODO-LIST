import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineWbSunny } from "react-icons/md";
function ToDoForm() {
  return (
    <section>
        <div>
          <input type="text" id="todolist_input" placeholder='Search note...' />
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
