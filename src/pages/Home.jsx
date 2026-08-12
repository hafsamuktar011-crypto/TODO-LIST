import React, { useState } from "react";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import ToDoItems from "../components/ToDoItems";

function Home() {
  const [openNewNote, setOpenNewNote] = useState(false);
  const [todos, setTodos] = useState([]);
  const [brightMode, setBrightMode] = useState(false);

  const toggleMode = () => {
    setBrightMode((prevMode) => !prevMode);
  };

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div
      className={
        brightMode
          ? "bg-[var(--bright-bg)] min-h-screen text-[var(--bright-text)] "
          : "bg-[var(--bg)] min-h-screen h-screen "
      }
    >
      <h1 className="text-center pt-16 pb-16">
        TODO LIST
      </h1>

      <ToDoForm
        dimmed={openNewNote}
        brightMode={brightMode}
        toggleMode={toggleMode}
      />

      <ToDoList
        openNewNote={openNewNote}
        setOpenNewNote={setOpenNewNote}
        addTodo={addTodo}
        brightMode={brightMode}
      />

      <ToDoItems todos={todos} />
    </div>
  );
}

export default Home;