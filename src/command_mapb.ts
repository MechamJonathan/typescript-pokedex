import { State } from "./state";

export async function commandMapb(state: State) {

    if (state.prevLocationsURL == undefined) {
        console.log("you're on the first page");
    } else {
        const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);
        state.nextLocationsURL = locations.next ?? undefined;
        state.prevLocationsURL = locations.previous ?? undefined;


        for (const location of locations.results){
            console.log(location.name);
        }
    }
}