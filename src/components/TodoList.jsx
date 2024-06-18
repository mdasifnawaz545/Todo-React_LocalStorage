import React from 'react'
import { useTodo } from '../context/TodoContext';
import { useState } from 'react';

function TodoList({ todo }) {
    let { editTodo, deleteTodo, isDoneTodo } = useTodo();
    const [editedTodo,setEditedTodo]=useState(todo.todoTask);
    const [isEditable,setIsEditable]=useState(true);
    const handleDone = () => {
        isDoneTodo(todo.id);
    }
    const handleDelete = () => {
        deleteTodo(todo.id);
    }
    const handleEditableTodo = () => {
        editTodo(todo.id,editedTodo);
        setIsEditable(!isEditable)
    }
    return (
        <div className={`${(todo.isDone)?"bg-green-300 duration-200 text-blue-300":"bg-[#8bbfff]"} duration-100 min-w-96 lg:min-w-1/2 h-12 flex justify-between items-center rounded-xl p-4`}>
            <div className='flex items-center justify-self-center '>          <button onClick={handleDone} className='hover:bg-green-200 rounded-lg duration-200 hover:shadow-lg shadow-md p-1'><img src="https://img.icons8.com/?size=100&id=Zy5ghkQj2rKy&format=png&color=000000" width={24} alt="" /></button>
            </div>
            <div className='text-blue-50'>
                <input  type="text" value={editedTodo} className={`bg-transparent ${!isEditable?"border-2 border-blue-300 shadow-lg outline-none rounded-lg p-1 ":""} cursor-pointer outline-none'`}  readOnly={isEditable}
                onChange={(e)=>{setEditedTodo(e.target.value)}} />
            </div>
            <div className='flex justify-evenly items-center gap-4'>


                <button disabled={todo.isDone} onClick={()=>{if(isEditable) setIsEditable((prev)=>prev=!prev) 
                    else handleEditableTodo();
                }} className='hover:bg-orange-100 rounded-lg duration-200 hover:shadow-lg shadow-md p-1'><img src={`${isEditable?"https://img.icons8.com/?size=100&id=IQwdXd0kulpV&format=png&color=000000":"https://img.icons8.com/?size=100&id=DVzc1vi8FDJt&format=png&color=000000"}`} width={24} alt="" /></button>
                <button onClick={handleDelete} className='hover:bg-red-300 rounded-lg duration-300 hover:shadow-lg shadow-md p-1'><img src="https://img.icons8.com/?size=100&id=Gr9Hk0UxLDFn&format=png&color=000000" width={24} alt="" /></button></div>

            {/* 
            <button><img src="https://img.icons8.com/?size=100&id=DVzc1vi8FDJt&format=png&color=000000" width={24} alt="" /></button> */}



        </div>
    )
}

export default TodoList