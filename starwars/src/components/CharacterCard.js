import React from "react";

const CharacterCard = props => {
  console.log("Console loggin props: ", props)
  return (
    <div className="character-card">
      <h2>Name: {props.name}</h2> {/*Accepting the name prop from CharcterList*/}
      <h3>Birth Year: {props.birth}</h3> {/*Accepting the birthYear prop from CharacterList*/}
    </div>
  );
};

export default CharacterCard;//Exporting CharacterCard to parent: CharacterList