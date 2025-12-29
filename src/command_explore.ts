import { PokeAPI } from "./pokeapi";
import { State } from "./state";

export async function commandExplore(state: State, ...args: string[]): Promise<void>  {
    const areaName = args[0];

    if (args.length !== 1) {
        console.log("you must provide a location name");
        return;
    }

    try {
        const location = await state.pokeAPI.fetchLocation(areaName);
        console.log(`Exploring ${areaName}...`);
        console.log("Found Pokemon:");
        for (const encounter of location.pokemon_encounters){
            const name = encounter.pokemon.name;
            console.log(" - " + name);
        } 
    } catch (err) {
        console.log(`Could not explore "${areaName}". Is that a valid location area?`);
    }
}