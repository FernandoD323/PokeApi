import { createSlice } from '@reduxjs/toolkit';


export const pokeSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        namePoke:[],

    },
    reducers: {
        setPokemons: ( state, action ) => {

            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        },

        getPokemonbyName: ( state, action ) => {
            state.namePoke = action.payload.namePoke;
        }

    }
});

export const { setPokemons,getPokemonbyName } = pokeSlice.actions;

