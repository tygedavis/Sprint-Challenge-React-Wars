import React from "react";
import styled from 'styled-components'

const CharacterCardDiv = styled.div`
    margin: 5px 10px;
    border: 2px solid black;
    background-color: darkgray;
    text-align: center;
    width: 200px;
    padding: 5px;
`;

const H2Style = styled.h2`
    color: white;
`;

const H3Style = styled.h3`
    color: white;
`;


const CharacterCard = props => {
  //console.log("Console loggin props: ", props)
  return (
    <CharacterCardDiv>
      <H2Style>Name: {props.name}</H2Style> {/*Accepting the name prop from CharcterList*/}
      <H3Style>Birth Year: {props.birth}</H3Style> {/*Accepting the birthYear prop from CharacterList*/}
    </CharacterCardDiv>
  );
};

export default CharacterCard;//Exporting CharacterCard to parent: CharacterList