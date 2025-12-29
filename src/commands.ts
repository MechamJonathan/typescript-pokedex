import { commandExit } from "./command_exit.js"
import { commandExplore } from "./command_explore.js"
import { commandHelp } from "./command_help.js"
import { commandMap } from "./command_map.js"
import { commandMapb } from "./command_mapb.js"

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
    }
}