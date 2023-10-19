import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Headers } from './Headers';

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Lavar la ropa", completed: false },
  { text: "Ordenar los cuartos", completed: true },
  { text: "LALALALA", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completeTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  
  const searchedTodos = todos.filter (
    todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase( )
       return todoText.includes(searchText)
    }
  )

    const completeTodo = (text) => {
      const newTodos = [...todos]
      const todoIndex =  newTodos.findIndex (
        (todo) => todo.text == text
      )
      newTodos[todoIndex].completed= true
      setTodos(newTodos)
    }

  return (
    <>
      <Headers />
      <TodoCounter 
        completed={completeTodos} 
        total={totalTodos} 
      />
      <TodoSearch 
         searchValue={searchValue}
         setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete = { () => completeTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
