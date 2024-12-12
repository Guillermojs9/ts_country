import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CountriesFlatList } from '../components/CountriesFlatList';
import { RootStackParamList } from '../types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Countries'>;

export function CountriesScreen({ route, navigation }: Props): React.JSX.Element {
    const { countries } = route.params;
    return (
        <CountriesFlatList navigation={navigation} countries={countries} />
    );
}
