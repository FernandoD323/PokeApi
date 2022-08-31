import { useEffect } from "react"
import { getPokemons } from "./store/slices/thunks";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";


export const PokeApp = () => {

    const dispatch = useDispatch();
    const { pokemons = [], page } = useSelector( state => state.pokemons );
  
  
    useEffect(() => {
      dispatch( getPokemons() );    
    }, [])
    
  
    return (
      <>
          <h1>¡PokeApp!</h1>
          <hr />
  
          <ul>
            {
              pokemons.map( ({ name }) => (
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
  
