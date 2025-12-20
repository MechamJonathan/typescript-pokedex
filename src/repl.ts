import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[] {
    return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word.length > 0);
}

export function startREPL(){
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    })

    rl.prompt();

    rl.on('line', (line) => {
        const received = cleanInput(line);
        const commands = getCommands();

        if (received.length < 1){
            rl.prompt();
            return;
        }

        if (received[0] in commands) {
            const cmd = commands[received[0]]
            cmd.callback(commands);
        } else {
            console.log("Unkown command")
        }

        rl.prompt();
    });
}

