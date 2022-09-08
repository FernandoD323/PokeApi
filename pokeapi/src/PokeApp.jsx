
import { ListPokemons } from "./components/ListPokemons";
import { SearchPokemon } from "./components/SearchPokemon";



export const PokeApp = () => {

 

    

  return (
    <>

      <h1 className="title">¡PokeApp!</h1>
      <hr className="hr"/>

      
        <SearchPokemon/>
        <ListPokemons/>
    </>
  )
    }

    
