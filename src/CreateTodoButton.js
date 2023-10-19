import "./CreateTodoButton.css";
import { RiAddLine } from "react-icons/ri";

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("le diste click");
        console.log(event);
        console.log(event.target);
      }}
    >
      <RiAddLine />
    </button>
  );
}
export { CreateTodoButton };
