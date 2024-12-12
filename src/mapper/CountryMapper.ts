import { Country } from "../entities/Country";
import { DataCountry } from "../entities/dataResponse";

export const countryMapper = (item: DataCountry): Country => {
    return {
        name: item.name.common,
        capital: item.capital ? item.capital[0] : '',
        language: item.languages ? Object.values(item.languages) : [],
        flag: item.flags.png,
        region: item.region,
    };
};
