import { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    //console.log(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary container">
      <form className="form" onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word..."
          className="input"
          onChange={handleKeywordChange}
        />
      </form>
      <Results info={results} />
    </div>
  );
}
