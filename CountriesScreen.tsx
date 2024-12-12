import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, FlatList, Text, Pressable } from 'react-native';
import { Country } from './Country';
import { DataCountry } from './dataResponse';
import { countryMapper } from './CountryMapper';

const urlRegion: string = 'https://restcountries.com/v3.1/all?fields=region';
const urlPaisesRegion: string = 'https://restcountries.com/v3.1/region/';

export function CountriesScreen() {
    const [regions, setRegions] = useState<string[]>([]);
    const [countries, setCountries] = useState<Country[]>([]);

    async function getRegions() {
        const response = await fetch(urlRegion);
        if (!response.ok) {
            throw new Error('Error fetching regions');
        }
        const jsonData: DataCountry[] = await response.json();
        const regionsResponse = [...new Set(jsonData.map((country) => country.region))];
        setRegions(regionsResponse);
    }

    async function getCountries(region: string) {
        const response = await fetch(`${urlPaisesRegion}${region}`);
        if (!response.ok) {
            throw new Error('Error fetching countries');
        }
        const jsonData: DataCountry[] = await response.json();
        const countriesMapped = jsonData.map((item) => countryMapper(item));
        setCountries(countriesMapped);
        console.log('Paises en la región ' + region + ':');
        countries.forEach((country) => {
            console.log(country.name);
        });
    }

    useEffect(() => {
        getRegions();
    }, []);

    const onPressFunction = (region: string) => {
        console.log('Región seleccionada:', region);
        getCountries(region);

    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            {regions.length > 0 ? (
                <FlatList
                    data={regions}
                    keyExtractor={(index) => index.toString()}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => onPressFunction(item)}>
                            <Text style={styles.regionText}>{item}</Text>
                        </Pressable>
                    )}
                />
            ) : (
                <Text>Cargando regiones...</Text>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    regionText: {
        fontSize: 18,
        marginBottom: 10,
    },
});