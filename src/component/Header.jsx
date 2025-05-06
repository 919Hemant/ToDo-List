import { useState } from 'react';
import './Header.css';
import ToDoList from './TodoList';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Header(){
    const [todoValue, setTodoValue] = useState('');
    const [todosArr, setTodos] = useState([]);

    function handleChange(e){
        setTodoValue(e.target.value)
    }

    function handleClick(){
        if(todoValue.trim() === '') return;
        
        // Add new task with a unique ID
        const newTask = {
            id: Date.now(), // Use timestamp as unique ID
            text: todoValue
        };
        
        setTodos([...todosArr, newTask]);
        setTodoValue('');
    }

    function handleKeyDown(e) {
        if(e.key === 'Enter') {
            handleClick();
        }
    }

    function handleDelete(taskId) {
        // Filter out the task with the matching ID
        const newTodos = todosArr.filter(task => task.id !== taskId);
        setTodos(newTodos);
    }

    return (
      <>
        <div className="todo-container">
            <div className="header-section">
                <h1 className="header">
                    <CheckCircleOutlineIcon style={{ marginRight: '8px', fontSize: '28px' }} />
                    Todo List
                </h1>
                <p className="subtitle">Organize your day, achieve your goals</p>
            </div>
            
            <div className="inputbox">
                <input 
                    type="text" 
                    placeholder="Add a new task..." 
                    value={todoValue} 
                    id='input-box' 
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <button className='add-btn' onClick={handleClick}> 
                    Add Task
                </button>
            </div>
            
            {todosArr.length > 0 && (
                <div className="task-stats">
                    <p>Total Tasks: <span>{todosArr.length}</span></p>
                </div>
            )}
            
            <ToDoList todoValue={todosArr} onDelete={handleDelete}/>
        </div>
      </>
    )
}

export default Header;