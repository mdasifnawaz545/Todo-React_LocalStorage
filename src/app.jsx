import React from 'react'
import { useState,useEffect } from 'react'
import Title from './components/Title'
import InputBox from './components/InputBox'
import TodoList from './components/TodoList'
import { TodoContextProvider, TodoContext, useTodo } from './context/TodoContext'

export function App() {
  const [todos, settodos] = useState([]);

  const addTodo = (todo) => {
    settodos((prev) => (
      [...prev, { id: Date.now(), todoTask: todo, isDone: false }]
    ))
  }
  const editTodo = (id, todo) => {
    settodos((prev) => (
      prev.map((el) => {
        if (el.id === id) {
          return { ...el, todoTask: todo }
        }
        else return el;
      })
    ))
  }
  const deleteTodo = (id) => {
    settodos((prev) => {
      let latestTodo = prev.filter((el) => (el.id !== id))
      return latestTodo;
    })
  }
  const isDoneTodo = (id) => {
    settodos((prev) => (
      prev.map((el) => {
        if (el.id === id) {
          return { ...el, isDone: !el.isDone }
        }
        else return el;
      })
    ))
  }

  useEffect(() => {
    let todosArray = JSON.parse(localStorage.getItem("todos"));
    settodos(todosArray);
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoContextProvider value={{ todos, addTodo, deleteTodo, editTodo, isDoneTodo }}>
      <div className='flex gap-8 justify-start sm:w-full items-center w-full flex-col min-h-screen bg-cover' style={{ backgroundImage: `url(https://res.cloudinary.com/dpqdgcipi/image/upload/v1718641814/3d-rendering-blue-pen-with-paper_pedazy.jpg)` }}>
        <Title />
        <InputBox />
        {todos.map((el) => (<div>
          <TodoList todo={el} />
        </div>))}
      </div>
    </TodoContextProvider>
  )
}

