import { createBrowserRouter,createRoutesFromElements,Route,Link,NavLink,RouterProvider } from 'react-router-dom'
import RickMorty from "./rickandmorty"
import Location from "./locations"
import Episodes from "./episodes"
import Nav from "./Nav"

function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Nav/>}>
        <Route path='rickandmorty'element={<RickMorty/>}/>
        <Route path='locations'element={<Location/>}/>
        <Route path='episodes'element={<Episodes/>}/>
      </Route>  
    )
  )
  
    return (
      <>
      <RouterProvider router={router}/>
      </>
    )
  }


export default App
