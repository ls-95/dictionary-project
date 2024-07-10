import Meaning from "./Meaning";
import GeneralSynonyms from "./GeneralSynonyms";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.info) {
    //console.log(props.info.meanings[0].synonyms);
    //console.log(props.info);
    return (
      <div className="Results">
        <section>
          <h2>{props.info.word}</h2>
          {props.info.phonetics.map(function (phonetics, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetics} />
              </div>
            );
          })}
        </section>

        <GeneralSynonyms words={props.info.meanings[0].synonyms} />

        {props.info.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
