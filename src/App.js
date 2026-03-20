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
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (id) =>
    setTasks(tasks.filter(t => t.id !== id));

  const updateTask = (id, text) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, text } : t));


  const filtered = tasks
    .filter(t =>
      t.text.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.text.localeCompare(b.text);
      } else {
        return b.text.localeCompare(a.text);
      }
    });

  return (
    <div style={{ padding: 20 }}>
      <h1>Task Manager</h1>

      <ThemeToggle theme={theme} setTheme={setTheme} />

      <SearchBar setSearch={setSearch} />

      {}
      <button onClick={() =>
        setSortOrder(sortOrder === "asc" ? "desc" : "asc")
      }>
        Sort: {sortOrder === "asc" ? "A-Z" : "Z-A"}
      </button>

      <TaskInput addTask={addTask} />

      <TaskList
        tasks={filtered}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}