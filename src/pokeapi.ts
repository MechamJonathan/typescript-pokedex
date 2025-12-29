import { Cache } from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private cache: Cache;

    constructor() {
        this.cache = new Cache(3000);
    }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const fullUrl = pageURL ?? PokeAPI.baseURL + "/location-area";
        const cached = this.cache.get<ShallowLocations>(fullUrl);
        if (cached) {
            return cached;
        }

        try {
            const resp = await fetch(fullUrl)
            if (!resp.ok){
                throw new Error(`${resp.status} ${resp.statusText}`)
            }

            const data = (await resp.json()) as ShallowLocations;
            this.cache.add(fullUrl, data);
            return data;

        } catch (err) {
            throw new Error(`Error fetching locations: ${(err as Error).message}`)
        }
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const fullUrl = PokeAPI.baseURL + `/location-area/${locationName}`;
        const cached = this.cache.get<Location>(fullUrl);
        if (cached) {
            return cached;
        }

        try {
            const resp = await fetch(fullUrl);
            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            const data = (await resp.json()) as Location;
            this.cache.add(fullUrl, data);
            return data;

        } catch (err) {
            throw new Error(`Error fetching locations: ${(err as Error).message}`);
        }
    }

    async fetchPokemon(name: string): Promise<Pokemon> {
        const fullUrl = PokeAPI.baseURL + `/pokemon/${name}`;
        const cached = this.cache.get<Pokemon>(fullUrl);
        if (cached) {
            return cached;
        }

        try {
            const resp = await fetch(fullUrl);
            if (!resp.ok) {
                throw new Error(`${resp.status} ${resp.statusText}`);
            }

            const data = (await resp.json()) as Pokemon;
            this.cache.add(fullUrl, data);
            return data;

        } catch (err) {
            throw new Error(`Error fetching pokemon: ${(err as Error).message}`);
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
    pokemon_encounters: {
        pokemon: {
            name: string,
            url: string,
        }
    }[]
} 

export type Pokemon = {
    name: string;
    id: number;
    base_experience: number;
    height: number,
    weight: number,
    stats: {
            base_stat: number,
            stat: {
                name: string,
            },
    }[],
    types: {
        type: {
            name: string,
        },
    }[],
}