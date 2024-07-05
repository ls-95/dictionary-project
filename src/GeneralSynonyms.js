export default function GeneralSynonyms(props) {
  if (props.words.length > 1) {
    return (
      <ul>
        {props.words.map(function (words, index) {
          return <li key={index}>{words} </li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
