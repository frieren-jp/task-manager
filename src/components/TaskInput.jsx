import { useState } from "react";

export default function TaskInput({ addTask }) {
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [tags, setTags] = useState("");

  const handleAdd = (e) => {
    e.preventDefault()
    if (!text) return;

    addTask({
      id: Date.now(),
      text,
      deadline,
      tags: tags ? tags.split(",") : []
    });

    setText("");
    setDeadline("");
    setTags("");
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Task..."
      />
      <input
        type="date"
        value={deadline}
        onChange={e => setDeadline(e.target.value)}
      />
      <input
        value={tags}
        onChange={e => setTags(e.target.value)}
        placeholder="tags (comma)"
      />
      <button type="submit">Add</button>
    </form>
  );
}