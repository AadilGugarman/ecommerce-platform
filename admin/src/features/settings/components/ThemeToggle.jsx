const ThemeToggle = ({ onChange }) => (
  <select onChange={(e) => onChange(e.target.value)}>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
);

export default ThemeToggle;
