import { useState } from "react";
import isOverdue from "../utils/isOverdue";

export default function TaskItem({ task, deleteTask, updateTask }) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(task.text);

  return (
    <div style={{ color: isOverdue(task.deadline) ? "red" : "inherit" }}>
      {edit ? (
        <>
          <input value={value} onChange={e => setValue(e.target.value)} />
          <button onClick={() => {
            updateTask(task.id, value);
            setEdit(false);
          }}>
            Save
          </button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          {task.deadline && <span> ({task.deadline})</span>}
          <div>
            {task.tags.map(tag => (
              <span key={tag}>#{tag} </span>
            ))}
          </div>
        </>
      )}

      <button onClick={() => setEdit(!edit)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}