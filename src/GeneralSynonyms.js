import "./Synonyms.css";

export default function GeneralSynonyms(props) {
  if (props.words.length > 1) {
    return (
      <section>
        <h3 className="fw-bold">Synonyms:</h3>
        <ul className="Synonyms">
          {props.words.map(function (words, index) {
            return (
              <li key={index}>
                {words}
                {index < props.words.length - 1 ? ", " : ""}{" "}
              </li>
            );
          })}
        </ul>
      </section>
    );
  } else {
    return null;
  }
}
