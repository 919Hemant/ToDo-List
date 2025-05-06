import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CheckIcon from '@mui/icons-material/Check';
import './Todoitem.css';
import { useState } from 'react';

function ToDoItem(props) {
  const [mark, setMark] = useState(false);
  const [edited, setEdited] = useState(false);
  const [initalInputVal, setinitialInputVal] = useState(
    props.task.text[0].toUpperCase() + props.task.text.slice(1).toLowerCase()
  );

  function handleDelete() {
    if (props.onDelete) {
      props.onDelete(props.task.id);
    }
  }

  function handleEdit() {
    if (mark) return; // Prevent editing completed tasks
    setEdited(!edited);
  }

  function handleSave() {
    setEdited(false);
  }

  function handleClickforMarking() {
    setMark(!mark);
    if (edited) {
      setEdited(false); // Close edit mode when marking as complete
    }
  }

  return (
    <div className={`item-container ${mark ? 'completed-item' : ''}`}>
      <div className='left-cont'>
        <button 
          onClick={handleClickforMarking} 
          className='tick-btn'
          aria-label={mark ? "Mark as incomplete" : "Mark as complete"}
        >
          {mark && <CheckIcon fontSize="small" />}
        </button>
        
        {!edited ? (
          <p className={`todo-value ${mark ? 'completed' : ''}`}>{initalInputVal}</p>
        ) : (
          <input 
            className='input-field' 
            placeholder='Type your task...' 
            type="text" 
            value={initalInputVal}
            onChange={(e) => {
              let val = e.target.value;
              if (val.length > 0) {
                val = val.split('');
                val[0] = val[0].toUpperCase();
                for (let i = 1; i < val.length; i++) {
                  val[i] = val[i].toLowerCase();
                }
                val = val.join('');
              }
              setinitialInputVal(val);
            }} 
            autoFocus
          />
        )}
      </div>

      <div className="btn-container">
        {edited ? (
          <button className='save-btn' onClick={handleSave} title="Save changes">
            <SaveIcon fontSize="small" />
          </button>
        ) : (
          <button 
            className='edit-btn' 
            onClick={handleEdit} 
            disabled={mark}
            title={mark ? "Cannot edit completed tasks" : "Edit task"}
          >
            <EditIcon fontSize="small" />
          </button>
        )}
        <button className='delete-btn' onClick={handleDelete} title="Delete task">
          <DeleteIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;