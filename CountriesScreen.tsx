import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type Props = NativeStackScreenProps<RootStackParamList, 'Countries'>;

export function CountriesScreen({ route }: Props): React.JSX.Element {
    const { countries } = route.params;
    return (
        <View style={styles.container}>
            <FlatList
                data={countries}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text style={styles.countryName}>{item.name}</Text>}
            />
        </View>
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
