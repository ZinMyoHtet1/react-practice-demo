import "./App.css";
import MuiButton from "./components/MUI/MuiButton";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my web</h1>
      <ThemeToggle />
      <MuiButton />
    </div>
  );
}

export default App;
