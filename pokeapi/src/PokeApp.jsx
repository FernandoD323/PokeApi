import { useEffect } from "react"
import { getPokemons, getPokemonsbyName } from "./store/slices/thunks";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";


export const PokeApp = () => {

    const dispatch = useDispatch();
    const { pokemons = [], page} = useSelector( state => state.pokemons );
    
    const nameP = 'golbat'
    const dam = dispatch( getPokemonsbyName(nameP));


  
    useEffect(() => {
      dispatch( getPokemons() );   
    }, [])
    
    
  
    return (
      <>
    
          <ul>
           {dam.name}
          </ul>

          <h1>¡PokeApp!</h1>
          <hr />
        <input>

        </input>
          <ul>
            {
              pokemons.map( ({ name, url }) => (
                <li key={ name }>{ name }</li>
              ))
            }
          </ul>
  
          <button
            onClick={ () => dispatch( getPokemons(page) ) }
          >
            Next
          </button>

          

        

      </>

      
    )
  }
  
