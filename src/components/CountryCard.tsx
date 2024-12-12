import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Country } from '../entities/Country';
import { styles } from '../styles/Styles';
import CountryMap from './CountryMap';

type CardProps = {
    country: Country;
};

export function Card({ country }: CardProps) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.containerCard}>
                <Image source={{ uri: country.flag }} style={styles.image} />
                <View style={styles.textcontainerCard}>
                    <Text style={styles.title}>{country.name}</Text>
                    <Text style={styles.description}>{country.capital}</Text>
                    {country.language &&
                        Object.values(country.language).map((language, index) => (
                            <Text key={index} style={styles.languages}>
                                {language}
                            </Text>
                        ))}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

