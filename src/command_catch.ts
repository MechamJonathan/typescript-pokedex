import { State } from "./state";

export async function commandCatch(state: State, ...args: string[]): Promise<void> {
    const pokemonName = args[0];

    console.log(`Throwing a Pokeball at ${pokemonName}...`)

    if (args.length !== 1) {
        console.log("you must provide a pokemon name");
        return;
    }

    try {
        const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
        const chance = Math.random() * 200;

        if (chance > pokemon.base_experience) {
            console.log(`${pokemonName} was caught!`);
            state.pokedex[pokemonName] = pokemon;
            return;
        }
        console.log(`${pokemonName} escaped!`);

    } catch (err) {
        console.log(`Could not find "${pokemonName}". Is that a valid pokemon name?`);
    }

}