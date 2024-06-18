import {createContext,useContext} from 'react'

const TodoContext = createContext(
    {
        todos: [
            {
                id:Date.now(),
                todoTask:'Fazr Salah',
                isDone:false
            }
        ],
        addTodo:(todo)=>{},
        editTodo:(id,todoTask)=>{},
        deleteTodo:(id)=>{},
        isDoneTodo:(id)=>{},
    }

)

const TodoContextProvider = TodoContext.Provider;

function useTodo() {
    return useContext(TodoContext);
}

export {TodoContext,TodoContextProvider,useTodo}