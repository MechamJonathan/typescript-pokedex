

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const fullUrl = pageURL ?? PokeAPI.baseURL + "/location-area";

        try {
            const resp = await fetch(fullUrl)

            if (!resp.ok){
                throw new Error(`${resp.status} ${resp.statusText}`)
            }

            const data = (await resp.json()) as ShallowLocations;
            return data;

        } catch (err) {
            throw new Error(`Error fetching locations: ${(err as Error).message}`)
        }
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const fullUrl = PokeAPI.baseURL + `/location-area/${locationName}`;

        try {
            const resp = await fetch(fullUrl);
            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            const data = (await resp.json()) as Location;
            return data;
        } catch (err) {
            throw new Error(`Error fetching locations: ${(err as Error).message}`);
        }
    }
}

export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: { name: string; url: string }[];
}

export type Location = {
    id: number;
    name: string;
    game_index: number;
    location: {
        name: string;
        url: string;
    }
}