import { Country } from "../entities/Country";
import { DataCountry, Region } from "../entities/dataResponse";
import { countryMapper } from "../mapper/CountryMapper";
import { Http } from "./Http";
import axios from "axios";

export class HttpAxios extends Http {
    async getRegions(route: string): Promise<Region[]> {
        const response = await axios.get<DataCountry[]>(route);
        const regionsResponse = [...new Set(response.data.map((country) => country.region))];
        return regionsResponse;
    }

    async getCountries(route: string, region: string): Promise<Country[]> {
        const response = await axios.get<DataCountry[]>(`${route}${region}`);
        const countriesMapped = response.data.map((item: DataCountry) => countryMapper(item));
        return countriesMapped;
    }



}