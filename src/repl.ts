import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word.length > 0);
}

export function startREPL(state: State){
    state.interface.prompt();

    state.interface.on('line', (line) => {
        const received = cleanInput(line);
        const commands = state.registry;

        if (received.length < 1){
            state.interface.prompt();
            return;
        }

        if (received[0] in commands) {
            const cmd = commands[received[0]]
            cmd.callback(state);
        } else {
            console.log("Unkown command")
        }

        state.interface.prompt();
    });
}

