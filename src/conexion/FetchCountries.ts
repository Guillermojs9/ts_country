import { Country } from "../entities/Country";
import { HttpAxios } from "../http/HttpAxios";

const url_base: string = 'https://restcountries.com/v3.1/region/';
export async function fetchCountries(route: string, region: string): Promise<Country[]> {
    const httpAxios = new HttpAxios({ url_base: url_base });
    try {
        const data = await httpAxios.getCountries(route, region);
        return data;
    } catch (error) {
        console.error("Error fetching regions:", error);
        return [];
    }
}