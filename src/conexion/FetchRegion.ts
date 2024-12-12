import { DataCountry, Region } from "../entities/dataResponse";
import { HttpAxios } from "../http/HttpAxios";

const url_base: string = 'https://restcountries.com/v3.1/all?fields=region';

export async function fetchRegions(route: string): Promise<Region[]> {
    const httpAxios = new HttpAxios({ url_base: url_base });
    try {
        const data = await httpAxios.getRegions(route);
        return data;
    } catch (error) {
        console.error("Error fetching regions:", error);
        return [];
    }
}