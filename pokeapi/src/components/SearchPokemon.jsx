

import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsbyName } from '../store/slices/thunks';
import { useForm } from './useForm';




export const SearchPokemon = () => {
    const dispatch = useDispatch();
    const { namePoke } = useSelector(state => state.namePoke);
    const { sprites } = useSelector(state => state.sprites);
    const { abilities } = useSelector(state => state.abilities);



    const { searchPokemon, onInputChange } = useForm({
        searchPokemon: ''
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        if (searchPokemon.trim().length <= 1) return;
        if (searchPokemon) {
            dispatch(getPokemonsbyName(searchPokemon))
        }

    }
    

    return (
        <>

            <form onSubmit={onSearchSubmit}>
                <input
                    type="text"
                    name="searchPokemon"
                    placeholder='¡Busca un Pokémon!'
                    value={searchPokemon}
                    onChange={onInputChange}
                />
            </form>


            <div className="card__items">
                <div className="card__division">
                    <h1 className="card__id">{namePoke.id}</h1>
                    <img className="card__img" src={sprites.front_default} alt="" />
                </div>
                <div>
                    <h1 className="card__name">  {namePoke.name}</h1>
                    <hr className="card_hr"/>
                    <h2 className='card_data text3'>
                        Habilidades
                        <p >
                            {
                                abilities.map(({ ability }) => (
                                    <p className='card_data ability' key={ability}>{ability.name}</p>
                                ))
                            }
                        </p>
                    </h2>
                </div>
            </div>

        </>
    )
}
