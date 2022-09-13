import {family} from "../assets/SimpsonsData";
import {CreateSimpson} from "./SimpsonsPattern";
import {CreateCharacter} from './RickAndMortyPattern'
import {useState} from "react";


export function CharacterGenerator() {
    let [character, setCharacter] = useState([]);
    fetch('https://rickandmortyapi.com/api/character')
        .then(response=>response.json())
        .then(value => setCharacter(value.results))
return (
    <div>
        {
            family.map((value,index) => (<CreateSimpson member={value} key={index}/>))
        }
        {
            character.map((value,index) => {
                if(index<6) {
                    return (<CreateCharacter character={value} key={index}/>)
                }
            })
        }
    </div>
)



}