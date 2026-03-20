export default function SearchBar({ setSearch }) {
  return (
    <input
      placeholder="Search..."
      onChange={e => setSearch(e.target.value)}
    />
  );
}