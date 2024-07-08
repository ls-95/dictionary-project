import Meaning from "./Meaning";
import GeneralSynonyms from "./GeneralSynonyms";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.info) {
    //console.log(props.info.meanings[0].synonyms);
    console.log(props.info);
    return (
      <div className="Results">
        <h2>{props.info.word}</h2>
        {props.info.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetics} />
            </div>
          );
        })}
        <h4>Synonyms: </h4>
        <GeneralSynonyms words={props.info.meanings[0].synonyms} />
        {props.info.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
