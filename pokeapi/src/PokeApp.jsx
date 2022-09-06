import { useEffect } from "react"
import { getPokemons, getPokemonsbyName } from "./store/slices/thunks";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { useState } from "react";
import { setAtributes } from "./store/slices/pokeSlice";
import axios from "axios";


export const PokeApp = () => {

  const dispatch = useDispatch();
  const { pokemons = [], page } = useSelector(state => state.pokemons);
  const { namePoke } = useSelector(state => state.namePoke);
  const { sprites } = useSelector(state => state.sprites);
  const { abilities } = useSelector(state => state.abilities);
  const { atributes } = useSelector( state => state.atributes);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getPokemonsbyName(EfEFEFE));
    // obtenerAtributos()
  }, [])


  const EfEFEFE = 'charmander'



  // const [atributos, setAtributos] = useState([namePoke])

  // const obtenerAtributos = ()=>{
  //   // const atributos = namePoke;
  //   setAtributos(atributos.sprites)
  // }


  const [searchPokemon, setSearchPokemon] = useState('');

  // const namePokemon = 'golbat'


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

  //   {
  //     pokemons.map( ({ url }) => (

  //      <li key={ url }>{ (url) }</li>
  //    ))
  //    console.log({url})

  //  }

  // )

  // const habilidad = async function(){
  //   const habilidad = pokemons.map(({ url }) => { resp = await fetch (url)}
  // }



  // const {abilities} = namePoke;
  //   console.log("abilitites", abilities)


    // useEffect(() => {
    //   pokemons.map(({ url }) => {
    //     (axios.get(url)).then((res =>{
    //       dispatch(setAtributes({atributes: res.data}))
    //     }
    //     ))
    //   })
    // }, [])
    
    const [pokemonList, setPokemonList] = useState([])

    const loadData = () => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=5')
        .then(resp => {
          for (let i = 0; i < resp.data.results.length; i++) {
            axios.get(resp.data.results[i].url)
              .then(result => {
                setPokemonList(prevArray => [...prevArray, result.data])
              })
          }
        })
    }
  
useEffect(() => {
      loadData()
}, [])


  return (
    <>
      {/* <img src={atributos.back_default} alt="" /> */}

      <h1>¡PokeApp!</h1>
      <hr />
      <h1>{namePoke.id}</h1>

      <h1>  {namePoke.name}</h1>


      <img src={sprites.back_default} alt="" />

      <h1>
        Habilidades:
        <ul>
          {
            abilities.map(({ ability }) => (
              <li key={ability}>{ability.name}</li>
            ))
          }
        </ul>
      </h1>
      <div>
      <h1>{namePoke.weight/10}</h1>
      <h1>{namePoke.height/10}</h1>
      </div>
      



      <ul>
        {
          pokemons.map(({ name }) => (
            <li key={name}>{name}</li>
          ))
        },
        {
          pokemons.map(({ url }) => (
            <li key={url}>{url}</li>
          ))
        },


      </ul>



      <button
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>


      <input

        value={searchPokemon}
        placeholder='Buscar pokemón'
        onChange={e => setSearchPokemon(e.target.value)}

      />
    <div>
        <ul>{atributes.id}</ul>
    </div>
      {
            pokemonList.map((pokemon1)=>(
              <>
              <h1> {pokemon1.id}</h1>
              <h1> {pokemon1.name}</h1>
               <img src={pokemon1.sprites.front_default} alt="" />
               <h1> {pokemon1.weight/10}</h1>
               <h1>{pokemon1.height/10}</h1>
              </>
            ))
      }
    </>
  )
    }

    
