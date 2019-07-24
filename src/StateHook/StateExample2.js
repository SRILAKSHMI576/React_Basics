import React, { useState } from "react";

function StateExample2(props) {
  const [personsState, setPersonsState] = useState({
    person: [
      { name: "Sri", age: 21 },
      { name: "laxmi", age: 24 },
      { name: "srinu", age: 26 }
    ],
    otherState: "see other value"
  });

  const switchName = () => {
    setPersonsState({
      person: [
        { name: "Srilaxmi", age: 21 },
        { name: "laxmi", age: 24 },
        { name: "srinu", age: 29 }
      ]
    });
  };

  return (
    <div>
      <button onClick={this.togglePersonsHandler}>click on</button>
      Name = {personsState.person[0].name} Age = {personsState.person[0].age}
      <br />
      Name = {personsState.person[1].name} Age = {personsState.person[1].age}
      <br />
      Name = {personsState.person[2].name} Age = {personsState.person[2].age}
    </div>
  );
}

export default StateExample2;
