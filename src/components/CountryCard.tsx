import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Country } from '../entities/Country';

type CardProps = {
    country: Country;
};

export function Card({ country }: CardProps) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Image source={{ uri: country.flag }} style={styles.image} />
                <View style={styles.textContainer}>
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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        margin: 10,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    textContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    languages: {
        backgroundColor: '#e0f7fa',
        color: '#00796b',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: 'flex-start',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
    },
});
