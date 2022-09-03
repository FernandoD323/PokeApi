import { useEffect } from "react"
import { getPokemons, getPokemonsbyName } from "./store/slices/thunks";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { useState } from "react";


export const PokeApp = () => {
 
    const dispatch = useDispatch();
    const { pokemons = [], page} = useSelector( state => state.pokemons );
    const { namePoke, namePokemon} = useSelector(state => state.namePoke );
    const { sprites} = useSelector(state => state.sprites );
    const { abilities } = useSelector(state => state.abilities );
  
    useEffect(() => {
      dispatch( getPokemons());  
      dispatch( getPokemonsbyName(nameP)); 
    }, [])
   


    const [ searchPokemon, setSearchPokemon ] = useState('');
        
    const nameP = searchPokemon

    // const { stats } = namePoke;
    // console.log(stats.base_stat)


    
    // const [pokemonStats, setPokemonStats] = useState([])

    // const atributos = async()=>{
    //   // const dato = await namePoke;
    //   setPokemonStats(namePoke.sprites)
    // }

    // useEffect(() => {
    //   atributos();
  
    // }, [])

    // const [ inputValue, setInputValue ] = useState('');

    // const onInputChange = ({ target }) => {
    //     setInputValue( target.value );
    // }

    // const onSubmit = ( event ) => {
    //     event.preventDefault();
    //     if( inputValue.trim().length <= 1) return;

    //     // setCategories( categories => [ inputValue, ...categories ]);
    //     setInputValue('');
    //     onNewCategory( inputValue.trim() );
    // }
    
    return (
      <>
          {/* <img src={pokemonStats.back_default} alt="" /> */}

           <h1>¡PokeApp!</h1>
           <hr />
           <h1>{namePoke.id}</h1>
           
           <h1>  {namePoke.name}</h1>

           <img src={sprites.back_default} alt="" />
           
            <h1>
            Habilidades:
            <ul>
             {
              abilities.map( ({ ability }) => (
                <li key={ ability }>{ ability.name }</li>
              ))
            }
            </ul>
            </h1>
            
  

          <ul>
            {
              pokemons.map( ({ name }) => (
                <li key={ name }>{ name }</li>
              ))
            },
            {
              pokemons.map( ({ url }) => (
                <li key={ url }>{ (JSON.stringify(url)) }</li>
              ))
            },
           
          </ul>
  
          <button
            onClick={ () => dispatch( getPokemons(page) ) }
          >
            Next
          </button>

          
            <input 
            
             value={searchPokemon}
             placeholder='Buscar pokemón'
             onChange={e => setSearchPokemon(e.target.value)}

            />
       

        

      </>

      
    )
  }
  
