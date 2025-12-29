import { State } from "./state";


export async function commandInspect(state: State, ...args: string[]): Promise<void>{
    const pokemonName = args[0];

    if (args.length !== 1) {
        console.log("you must provide a pokemon name");
        return;
    }

    if (pokemonName in state.pokedex) {
        const info = state.pokedex[pokemonName];
        console.log("Name: " + info.name);
        console.log("Height: " + info.height);
        console.log("Weight: " + info.weight);
        console.log("Stats:");
        for (const stat of info.stats){
            console.log(" - " + stat.stat.name + ": " + stat.base_stat);
        }
        console.log("Types:");
        for (const type of info.types){
            console.log(" - " + type.type.name);
        }
    }
    else {
        console.log("you have not caught that pokemon");
    }
}