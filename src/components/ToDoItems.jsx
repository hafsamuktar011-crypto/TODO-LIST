import React, { useState } from "react";
import { FaPenFancy } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
function ToDoItems({ todos, setTodos ,filter,search}) {
  const [editingId, setEditingId] = useState(null);
  const [editNote, setEditNote] = useState("");

  {/*function*/} 
  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditNote(todo.note);
  };
const handleToggleDone = (id) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === id
        ? { ...todo, done: !todo.done }
        : todo
    )
  );
};
  const handleUpdate = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, note: editNote }
          : todo
      )
    );
    setEditingId();
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

{/*  decides what to display and filtering  */}
 const filteredTodos = todos.filter((todo) => {
  const matchesSearch = todo.note
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesFilter =
    filter === "all" ||
    (filter === "done" && todo.done === true) ||
    (filter === "not done" && todo.done === false);

  return matchesSearch && matchesFilter;
});
  {/*render*/}

  return (
    <div>
      {filteredTodos.map((todo,index) => (
        <div
          key={todo.id}
          className="border-b border-cyan-300 mx-50 p-3"
        >
          <div className="flex flex-row justify-between gap-3">

            {editingId === todo.id ? (
              <div className="flex gap-3">
                <input
                  type="text"
                  value={editNote}
                  onChange={(e) => setEditNote(e.target.value)}
                  className="rounded px-2 outline-2 outline-cyan-200"
                />

                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="bg-white text-black px-3 rounded"
                >
                  SAVE
                </button>
              </div>
            ) : (
              <div className="flex flex-row items-center gap-3">
               <span
                 onClick={() => handleToggleDone(todo.id)}
                 className="cursor-pointer"
               >
                 {todo.done ? (
                   <FaCheck className="w-7 h-7 outline-2 outline-cyan-300" />
                 ) : (
                   <div className="w-7 h-7 outline-2 outline-cyan-300"></div>
                 )}
               </span>
                <span>NOTE #{index + 1}</span>
               <span className={todo.done ? "line-through" : ""}>
                 {todo.note}
               </span>

                <span>{todo.alarm}</span>
                </div>
            )}

            <div className="flex justify-end gap-2">
              <FaPenFancy
                onClick={() => handleEdit(todo)}
                className="cursor-pointer"
              />

              <AiFillDelete
                onClick={() => handleDelete(todo.id)}
                className="cursor-pointer"
              />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default ToDoItems;