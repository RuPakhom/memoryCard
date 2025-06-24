import Card from "./Card";
import '../styles/CardGrid.css'
import { useState} from "react";

const pokemons = [
  { id: 1, name: "pikachu" },
  { id: 2, name: "charmander" },
  { id: 3, name: "bulbasaur" },
  { id: 4, name: "squirtle" },
  { id: 5, name: "jigglypuff" },
  { id: 6, name: "meowth" },
  { id: 7, name: "psyduck" },
  { id: 8, name: "machop" },
  { id: 9, name: "geodude" },
  { id: 10, name: "gastly" },
  { id: 11, name: "eevee" },
  { id: 12, name: "snorlax" }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

    shuffleArray(pokemons)

export default function CardGrid({updateScore}){


    function handleClick(){
        const newList = [...list]
        shuffleArray(newList)
        setList(newList)
    }

    const [list, setList] = useState(pokemons)

    return(
        <div className="grid">{list.map(pokemon => {
        return (
            <Card 
            name = {pokemon.name} 
            key={pokemon.id} 
            onClick = {handleClick} 
            updateScore = {updateScore}/>
        )
    })
}</div>
    )
}