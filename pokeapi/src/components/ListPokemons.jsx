

import axios from 'axios'
import { useEffect, useState } from 'react'


export const ListPokemons = () => {
  const [pokemonsList, setPokemonsList] = useState([])
  const [urlPokemons, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=8")
  const [nextPokemons, setNextPokemons] = useState()
  const [previousPokemons, setPreviousPokemons] = useState()

  const getPokemons = () => {
    axios.get(urlPokemons)
      .then(resp => {
        for (let i = 0; i < resp.data.results.length; i++) {
          axios.get(resp.data.results[i].url)
            .then(result => {
              setPokemonsList(pokemons => [...pokemons, result.data]);
              setNextPokemons(resp.data.next)
              setPreviousPokemons(resp.data.previous)

            })
        }
      })
  }



  useEffect(() => {
    getPokemons()
  }, [urlPokemons])



  return (
    <>
      {
        pokemonsList.map((pokemon) => (
          <>

            <div className="card__items">
              <div className="card__division">
                <h1 className="card__id">{pokemon.id}</h1>
                <img src={pokemon.sprites.front_default} alt="" className="card__img" />
              </div>

              <div>
                <h1 className="card__name"> {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h1>
                <hr className="card_hr" />
                <p className="card_data weight"> {pokemon.weight / 10 + " kg"}</p>

                <p className="card_data height">{pokemon.height / 10 + " m"}</p>
                <div>
                  <h2 className="card_data text1">Peso</h2>
                  <h2 className="card_data text2">Altura</h2>
                </div>
              </div>
            </div>
          </>

        ))


      }

      <div className='buttons'>
      <button className="card__cta"
        onClick={() => {
          setPokemonsList([])
          setUrl(nextPokemons)
        }}
      >
        ¡Next Pokemons!
      </button>

      {previousPokemons && <button className="card__cta"
        onClick={() => {
          setPokemonsList([])
          setUrl(previousPokemons)
        }}
      >
        ¡Previous Pokemons!
      </button>
      }
      </div>

    </>

  )
}
