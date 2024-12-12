import { useEffect, useState } from "react";
import { fetchCountries } from "../conexion/FetchCountries";
import { Country } from "../entities/Country";

export function useRegions(route: string, region: string) {
    const [countries, setCountries] = useState<Country[]>([]);
    useEffect(() => {
        const loadMovies = async () => {
            const data = await fetchCountries(route, region);
            setCountries(data);
        };
        loadMovies();
    }, []);

    return { countries };

}