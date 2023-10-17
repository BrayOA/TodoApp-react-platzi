import 'react-icons/fa';
import './TodoItem.css'
import {RiCheckboxCircleFill, RiCloseLine} from 'react-icons/ri'


function TodoItem(props) {
  return (
    <li className="TodoItem">
     <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}><RiCheckboxCircleFill className='v'/></span>

      <p className={`TodoItem-p TodoItem-p--complete`}>{props.text}</p>
      <span className="Icon Icon-delete"><RiCloseLine className='x'/></span>
    </li>
  );
}
 export {TodoItem}