
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import {Headers} from './Headers'

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Lavar la ropa", completed: false },
  { text: "Ordenar los cuartos", completed: true },
  { text: "Limpiar la sala y cochera", completed: false },
];

function App() {
  return (
    <>
      <Headers/>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
