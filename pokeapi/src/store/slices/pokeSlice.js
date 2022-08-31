import { createSlice } from '@reduxjs/toolkit';

export const pokeSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        name:'',

    },
    reducers: {
        setPokemons: ( state, action ) => {

            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
            state.name = action.payload.name;
        }
    }
});

export const { setPokemons } = pokeSlice.actions;

