import { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSheCodesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let sheCodesApiKey = "b59ff36eta0339438504acc8a04b4b3o";
    let sheCodesUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${sheCodesApiKey}`;
    axios.get(sheCodesUrl).then(handleSheCodesResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary container">
      <section className="first-section">
        <form className="form" onSubmit={search}>
          <input
            type="search"
            placeholder="Type a word..."
            className="input"
            onChange={handleKeywordChange}
          />
        </form>
      </section>

      <Results info={results} />
      <Photos photos={photos} />
    </div>
  );
}
