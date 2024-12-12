import { Country } from "../entities/Country";

export type RootStackParamList = {
    Region: undefined;
    Countries: { countries: Country[] };
    CountryInfo: { country: Country };
};