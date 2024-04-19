import ProfilePic from './assets/rick.jpg'

function Card (){

const things = "alive"

return (
    <>    
    <div className="card block  items-center justify-center p-20 border-2px">
        <img className="w-200 h-200" src={ProfilePic} alt="Ricks image" />
        <h1>Rick</h1>
        <p>Status:{things}</p>
    </div>
    </>
)

}

export default Card;