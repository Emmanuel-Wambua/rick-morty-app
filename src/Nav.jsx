import { NavLink,Outlet } from "react-router-dom";


export default function Nav(){

    return(
        <>
         <div>
            <NavLink to='rickandmorty'>CHARACTERS</NavLink> <br />
            <NavLink to='locations'>LOCATION</NavLink><br />
            <NavLink to='episodes'>EPISODES</NavLink>
         </div>
         <Outlet/>
         
        </>
        
    )


}