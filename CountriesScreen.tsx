import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';
import { CountriesFlatList } from './CountriesFlatList';

type Props = NativeStackScreenProps<RootStackParamList, 'Countries'>;

export function CountriesScreen({ route }: Props): React.JSX.Element {
    const { countries } = route.params;
    return (
        <CountriesFlatList countries={countries} />
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    countryName: {
        fontSize: 18,
        marginBottom: 10,
    },
});
