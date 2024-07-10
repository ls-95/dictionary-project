export default function Phonetic(props) {
  //console.log(props.phonetic);
  if (props.phonetic.audio.length > 1) {
    return (
      <div className="Phonetics">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen 🔊
        </a>
        <p>{props.phonetic.text}</p>
      </div>
    );
  } else if (props.phonetic.text) {
    return (
      <div className="Phonetics">
        <p>{props.phonetic.text}</p>
      </div>
    );
  } else {
    return null;
  }
}
