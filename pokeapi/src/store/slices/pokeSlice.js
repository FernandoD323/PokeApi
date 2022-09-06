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
        atributes: []

    },
    reducers: {
        setPokemons: ( state, action ) => {

            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        },

        setAtributes: ( state, action ) => {

            state.atributes = action.payload.atributes;
        },

        getPokemonbyName: ( state, action ) => {
            state.namePoke = action.payload.namePoke;
            state.namePokemon = action.payload.namePokemon;
            state.sprites = action.payload.sprites;
            state.abilities = action.payload.abilities;
        }

    }
});

export const { setPokemons, setAtributes, getPokemonbyName } = pokeSlice.actions;

