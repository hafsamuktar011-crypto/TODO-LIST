import React, {useState} from 'react'
import ToDoList from '../components/ToDoList'
import ToDoForm from '../components/ToDoForm'
import ToDoItems from '../components/ToDoItems'
function Home() {
const [openNewNote, setOpenNewNote] = useState(false);
  return (
    <div>
      <h1 className='text-center m-6 p-10'>TODO LIST</h1>
      {/*form gets dimmed when openNewNote is true*/}
      <ToDoForm dimmed={openNewNote}/>
       {/* Pass state and setter down */}
      <ToDoList openNewNote={openNewNote} setOpenNewNote={setOpenNewNote}/>
      <ToDoItems/>
    </div>
  )
}

export default Home
