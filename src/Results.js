import Meaning from "./Meaning";
import GeneralSynonyms from "./GeneralSynonyms";
import "./Results.css";

export default function Results(props) {
  //console.log(props.info.meanings[0].synonyms);

  if (props.info) {
    return (
      <div className="Results">
        <h2>{props.info.word}</h2>
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
