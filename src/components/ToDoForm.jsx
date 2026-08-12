import React from 'react'
import { CiSearch } from "react-icons/ci";

function ToDoForm() {
  return (
    <section>
        <div>
          <input type="text" id="todolist_input" placeholder='Search note...' />
          <CiSearch />
        </div>
      
    </section>
  )
}

export default ToDoForm
