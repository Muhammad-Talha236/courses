import {createContext, useContext, useState} from 'react'

export const TodoContext = createContext({

    Todos:[{
       id:1,
         title:'Learn React',
         Completed:false
    }],
    addTodo: (todo)=>{},
    updateTodo: (id,Todo)=>{},
    deleteTodo: (id)=>{},
    completedTodo: (id)=>{},
})

export const useTodoContext = () =>{ 
   return useContext(TodoContext)

}

export const TodoProvider = TodoContext.Provider