import { commandCatch } from "./command_catch.js"
import { commandExit } from "./command_exit.js"
import { commandExplore } from "./command_explore.js"
import { commandHelp } from "./command_help.js"
import { commandInspect } from "./command_inspect.js"
import { commandMap } from "./command_map.js"
import { commandMapb } from "./command_mapb.js"
import { commandPokedex } from "./command_pokedex.js"

import type { CLICommand } from "./state.js"

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Display help message",
            callback: commandHelp, 
        },
        map: {
            name: "map",
            description: "Gets next locations",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Gets previous locations",
            callback: commandMapb,
        },
        explore: {
            name: "explore",
            description: "Gets pokemeon in location",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "catch pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "inspect pokemon",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "lists all pokemon in pokedex",
            callback: commandPokedex,
        }
    }
}