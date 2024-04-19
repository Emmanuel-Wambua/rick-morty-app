import { useState,useEffect } from "react"

function Location(){
    const [locations,setLocations] = useState([]) 


    const FetchLocations = async ()=>{
        const response = await fetch ('https://rickandmortyapi.com/api/location')
        const data = await response.json()

        setLocations(data.results)   
    }

    useEffect(() => {
        FetchLocations()
    }, [])

    return(
        <>
        <h1>RICK AND MORTY LOCATION PAGE:</h1>
        {
            locations.map((location) =>{
                return(
                    <div className="flex">
                    <div className="p-20 " key={location.id}>
                        <h2>{location.name}</h2>
                        <h2>{location.type}</h2>
                        <p>{location.dimension}</p>
                    </div>
                    </div>

                )
            })
        }
        </>
    )
}

export default Location;