import { pokeApi } from "../api/pokeApi";
import { setPokemons} from "./pokeSlice";

export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {

        const { data } = await pokeApi.get(`/pokemon?limit=5&offset=${ page * 10 }`);
        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }
}