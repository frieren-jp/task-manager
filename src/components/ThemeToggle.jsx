export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button onClick={() =>
      setTheme(theme === "light" ? "dark" : "light")
    }>
      Toggle Theme
    </button>
  );
}