import { createSlice } from '@reduxjs/toolkit';


export const pokeSlice = createSlice({
    name: 'pokemon',
    initialState: {
        id: '',
        page: 0,
        pokemons: [],
        namePoke: '',
        namePokemon: '',
        sprites: '',
        abilities:[],

    },
    reducers: {
        setPokemons: ( state, action ) => {

            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        },

        getPokemonbyName: ( state, action ) => {
            state.namePoke = action.payload.namePoke;
            state.namePokemon = action.payload.namePokemon;
            state.sprites = action.payload.sprites;
            state.abilities = action.payload.abilities;
            state.id = action.payload.id;
        }

    }
});

export const { setPokemons, getPokemonbyName } = pokeSlice.actions;

