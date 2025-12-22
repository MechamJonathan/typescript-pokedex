import { State } from "./state";


export async function commandMap(state: State) {
    const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);
    state.nextLocationsURL = locations.next ?? undefined;
    state.prevLocationsURL = locations.previous ?? undefined;

    console.log("\n");
    for (const location of locations.results){
        console.log(location.name);
    }
}