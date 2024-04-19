import { useState,useEffect } from "react"

function Episodes(){
    const [episodes,setEpsiodes] = useState([]) 


    const FetchEpisodes = async ()=>{
        const response = await fetch ('https://rickandmortyapi.com/api/episode')
        const data = await response.json()

        setEpsiodes(data.results)   
    }

    useEffect(() => {
        FetchEpisodes()
    }, [])

    return(
        <>
        <h1>RICK AND MORTY EPISODES PAGE:</h1>
        {
            episodes.map((episode) =>{
                return(
                    <div className="flex">
                    <div className="p-20 " key={episode.id}>
                        <h2>{episode.name}</h2>
                        <h2>{episode.air_date}</h2>
                        <p>{episode.episode}</p>
                    </div>
                    </div>

                )
            })
        }
        </>
    )
}

export default Episodes;