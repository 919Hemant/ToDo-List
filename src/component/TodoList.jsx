import './TodolIst.css';
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  const handleDelete = (taskId) => {
    if (props.onDelete) {
      props.onDelete(taskId);
    }
  };
  
  return (
    <div className="todolist-container">
      {props.todoValue.length > 0 ? (
        props.todoValue.map((task) => (
          <ToDoItem 
            key={task.id}
            task={task}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <div className="empty-list-message">
          <p>No tasks yet. Add a task to get started!</p>
        </div>
      )}
    </div>
  );
}

export default ToDoList;