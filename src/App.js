import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <h3>What word do you want to look up?</h3>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        This project was coded by{" "}
        <a href="https://github.com/ls-95" target="_blank" rel="noreferrer">
          Laetitia Saunders
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/ls-95/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
