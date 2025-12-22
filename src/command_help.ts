import type { CLICommand, State } from "./state.js";

export async function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!\n");
    console.log("Usage:\n");
    const commands = state.registry;

    for (const key in commands) {
        console.log(`${commands[key].name}: ${commands[key].description}`)
    };
    console.log("\n");
};