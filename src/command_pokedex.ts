import { State } from "./state";


export async function commandPokedex(state: State): Promise<void> {
    console.log("Your Pokedex:")
    for (const pokemon in state.pokedex) {
        console.log(" - " + pokemon);
    }

}