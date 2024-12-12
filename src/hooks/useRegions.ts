import { useEffect, useState } from "react";
import { fetchRegions } from "../conexion/FetchRegion";

export function useRegions(route: string) {
    const [regions, setRegions] = useState<string[]>([]);
    useEffect(() => {
        const loadMovies = async () => {
            const data = await fetchRegions(route);
            setRegions(data);
        };
        loadMovies();
    }, []);

    return { regions };

}