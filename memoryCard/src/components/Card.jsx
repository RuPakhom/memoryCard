import { useState, useEffect } from "react"
import '../styles/Card.css'

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

export default function Card( { name, onClick, updateScore }){


    const [src, setSrc] = useState(null);

    useEffect(() => {
        async function getPokemonImage(name){
            try{
                const url = POKEAPI_BASE_URL + name
                const response = await fetch(url)
                const jsonData = await response.json()
                setSrc(jsonData.sprites.other["official-artwork"].front_default)
            }
            catch (error){
                console.error("Error during fetch data: " + error)
            }
          }
        
            
        getPokemonImage(name)
        return () => {
        }},[name])
    
        
        
    return (
        <div 
        className='card'
        onClick={() => {
            onClick()
            updateScore(name)
        }}
        >
        <img src = {src}
        />
        <p className="cardText">{name[0].toUpperCase() + name.slice(1)}</p>
        </div>

    )
}