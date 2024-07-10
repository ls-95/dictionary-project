import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 1) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonyms, index) {
          return (
            <li key={index}>
              {synonyms}
              {index < props.synonyms.length - 1 ? ", " : ""}{" "}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
