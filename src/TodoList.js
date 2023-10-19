import "./TodoList.css";
import img from './img/plantilla.png';

function TodoList(props) {
  return (
    <div className="todo-container">
        <ul className="t-list">
            {props.children}
        </ul>
        <div className="imgAvi">
            <img src={img} alt="imagen avi" className="img-avi" />
        </div>
    </div>
  );
}

export { TodoList };
