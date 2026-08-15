import React, { useState } from "react";
import { FaPenFancy } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
function ToDoItems({ todos, setTodos ,filter}) {
  const [editingId, setEditingId] = useState(null);
  const [editNote, setEditNote] = useState("");
  const [isChecked,setIschecked]=useState(false)

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

    setEditingId(null);
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };
  const filteredTodos = todos.filter((todo) => {
  if (filter === "done") {
    return todo.done === true;
  }

  if (filter === "not done") {
    return todo.done === false;
  }

  return true;
});
  return (
    <div>
      {filteredTodos.map((todo) => (
        <div
          key={todo.id}
          className="border-b border-cyan-200 mx-50 p-3"
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
              <div className="flex flex-col gap-20 items-center">
  <span
    onClick={() => setIsChecked(!isChecked)}
    className="cursor-pointer flex items-center gap-2"
  >
    {isChecked ? (
      <FaCheck className="w-7 h-7 text-cyan-600" />
    ) : (
      <div className="w-7 h-7 outline outline-2 outline-cyan-300"></div>
    )}
    <span className={isChecked ? "line-through" : ""}>{todo.note}</span>
  </span>

  <span className={isChecked ? "line-through" : ""}>{todo.alarm}</span>
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