import { useEffect } from "react"
import { getPokemons, getPokemonsbyName } from "./store/slices/thunks";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";


export const PokeApp = () => {

    const dispatch = useDispatch();
    const { pokemons = [], page, } = useSelector( state => state.pokemons );
    

    useEffect(() => {
      dispatch( getPokemons());   
    }, [])
    
    // const nameP1 = 'golbat'
    dispatch( getPokemonsbyName('charizard'));
  
    return (
      <>
    
          <ul>
        
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
  
