import React, { useState } from 'react'
import { FaPenFancy } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";

      {/* displays one todo, with things like delete/edit/complete. */}
function ToDoItems({ todos }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div
          key={index}
          className="border-b border-cyan-200 lg:mx-50 "
        >
          <div className=" flex flex-row items-center justify-end gap-3">
          <div className='flex flex-row gap-20'>
              <span>{todo.note}</span>
            <span>{todo.alarm}</span>
          </div>
            <FaPenFancy />
            <AiFillDelete />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToDoItems
