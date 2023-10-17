import './TodoList.css'
function TodoList(props) {
    return (
        <ul className="t-list">
            {props.children}
        </ul> 
    );
  }

  export {TodoList}