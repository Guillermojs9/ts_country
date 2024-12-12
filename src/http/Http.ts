import { DataCountry, Region } from "../entities/dataResponse";

interface Config {
    url_base: string;
}

export abstract class Http {
    url_base: string;

    constructor({ url_base}: Config) {
        this.url_base = url_base;
    }

    abstract getRegions(route: string): Promise<Region[]>;
}