import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/theme.css";

export default function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("light");

  // 🔥 ВАЖНО: применяем тему ко всему body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (id) =>
    setTasks(tasks.filter(t => t.id !== id));

  const updateTask = (id, text) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, text } : t));

  const filtered = tasks.filter(t =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Task Manager</h1>

      <ThemeToggle theme={theme} setTheme={setTheme} />
      <SearchBar setSearch={setSearch} />
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={filtered}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}