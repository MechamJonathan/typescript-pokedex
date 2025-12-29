import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    interface: Interface;
    registry: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    nextLocationsURL?: string;
    prevLocationsURL?: string;
};

export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    })

    const commands = getCommands();
    
    return {
        interface: rl,
        registry: commands,
        pokeAPI: new PokeAPI(),
        nextLocationsURL: undefined,
        prevLocationsURL: undefined,
    };
}