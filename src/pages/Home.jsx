import React from 'react'
import ToDoList from '../components/ToDoList'
import ToDoForm from '../components/ToDoForm'
function Home() {
  return (
    <div>
      <h1 className='text-center m-6 p-10'>TODO LIST</h1>
      <ToDoForm/>
      <ToDoList/>
    </div>
  )
}

export default Home
