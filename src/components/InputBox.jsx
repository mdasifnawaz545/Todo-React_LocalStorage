import React from 'react'
import { useTodo } from '../context/TodoContext'
import { useState } from 'react'

function InputBox() {
  let [inputValue,setInputValue]=useState('')
  let { addTodo } = useTodo();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    addTodo(inputValue);
    setInputValue('')
  }
  return (
    <div >
      <form onSubmit={(e) => { inputValue?handleSubmit(e):null }}  className='flex gap-4'>
        <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} className=' rounded-2xl outline-none shadow-lg  max-w-96 h-10 p-4 hover:scale-105 duration-300 hover:shadow-lg hover:shadow-blue-400 bg-blue-50' placeholder='Add your task' />
        <button type='submit' className='bg-[#67abfc] hover:shadow-2xl shadow-lg  text-white px-6 rounded-2xl hover:scale-105 duration-150'>Add</button>
      </form>
    </div>
  )
}

export default InputBox
