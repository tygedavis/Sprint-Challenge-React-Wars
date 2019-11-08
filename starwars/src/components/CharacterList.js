import React, {useState, useEffect} from 'react';
import axios from "axios";
import CharacterCard from "./CharacterCard"
import styled from 'styled-components'


const CharacterListDiv = styled.div`
    margin: 5px 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 600px;
`;

const Buttons = styled.button`
    background-color: darkgray;
    color: white;
    border: 2px solid black;
`;

const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 10px;
`;

const CharacterList = () => {

    const [character, setCharacter] = useState([]);
    const [number, setNumber] = useState(1)

    useEffect(() => {
    axios.get(`https://lambda-swapi.herokuapp.com/api/people/?page=${number}`)//Grabbing the data
        .then(res => {
            console.log("Console logging the data from axios: ", res.data)//Gives back information on Luke Skywalker
            setCharacter(res.data.results)//Sets character to the information on Luke Skywalker
        })
        .catch(err => {
            console.log('There was an error in the Axios call: ', err)
        })
    }, [number])

    function buttonUp(){
        setNumber(number + 1);
        //console.log(number)
    }

    function buttonDown(){
        if(number > 1){
            setNumber(number - 1);
        }
    }

    //console.log("This is character: ", character);

    return(
        <>
            <CharacterListDiv>
                {character.map((person, index) => { //for every character, we want to make a new card. So we made character.map
                    return <CharacterCard key={index} name={person.name} birth={person.birth_year}/>   //We just wanted the information of name and birth. Passing these down in props to CharacterCard
                })}
            <ButtonDiv>
                <Buttons onClick={buttonDown}>Previous Page</Buttons>
                <Buttons onClick={buttonUp} >Next Page</Buttons>
            </ButtonDiv>
            </CharacterListDiv>

        </>
        );
}

export default CharacterList; //Exporting CharacterList to be added on to parent: App.js