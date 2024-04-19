import { useState,useEffect } from "react";

function RickMorty(){
    const [characters,setCharacters] = useState([]) 


    const FetchCharacters = async ()=>{
        const response = await fetch ('https://rickandmortyapi.com/api/character')
        const data = await response.json()

        setCharacters(data.results)   
    }

    useEffect(() => {
        FetchCharacters()
    }, [])

    return(
        <>
        <h1>RICK AND MORTY CHARACTER PAGE:</h1>
        {
            characters.map((character) =>{
                return(
                    <div className="flex">
                    <div className="p-20 " key={character.id}>
                        <img src={character.image} alt={character.name} />
                        <h2>{character.name}</h2>
                        <p>Status:{character.status}</p>
                        <p>{character.species}</p>
                    </div>
                    </div>

                )
            })
        }
        </>
    )
}



export default RickMorty;