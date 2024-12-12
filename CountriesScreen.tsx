import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';
import { CountriesFlatList } from './CountriesFlatList';

type Props = NativeStackScreenProps<RootStackParamList, 'Countries'>;

export function CountriesScreen({ route, navigation }: Props): React.JSX.Element {
    const { countries } = route.params;
    return (
        <CountriesFlatList navigation={navigation} countries={countries} />
    );
}
