import 'react-icons/fa';
import './TodoItem.css'
import {RiCheckboxCircleFill, RiCloseCircleLine} from 'react-icons/ri'


function TodoItem(props) {
  return (
    <li className="TodoItem">
     <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        >
          <RiCheckboxCircleFill/>
        </span>

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
        ><RiCloseCircleLine className='x'/></span>
    </li>
  );
}
 export {TodoItem} 