import React, {useState, useEffect} from 'react';
import axios from "axios";
import CharacterCard from "./CharacterCard"

const CharacterList = () => {

    const [character, setCharacter] = useState([]);
    const [number, setNumber] = useState(1)

    useEffect(() => {
    axios.get(`https://lambda-swapi.herokuapp.com/api/people/`)//Grabbing the data
        .then(res => {
            console.log("Console logging the data from axios: ", res.data.results)//Gives back information on Luke Skywalker
            setCharacter(res.data.results)//Sets character to the information on Luke Skywalker
        })
        .catch(err => {
            console.log('There was an error in the Axios call: ', err)
        })
    }, [])

    console.log("This is character: ", character);

    return(
        <div className="container">
            {character.map((person, index) => { //for every character, we want to make a new card. So we made character.map
                return <CharacterCard key={index} name={person.name} birth={person.birth_year}/>   //We just wanted the information of name and birth. Passing these down in props to CharacterCard
            })}
        </div>
        );
}

export default CharacterList; //Exporting CharacterList to be added on to parent: App.js