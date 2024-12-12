import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RootStackParamList";
import CountryMap from "../components/CountryMap";

type Props = NativeStackScreenProps<RootStackParamList, 'CountryInfo'>;

export function CountryInfoScreen({ route }: Props): React.JSX.Element {
    const { country } = route.params;
    return (
            <CountryMap country={country} />

    )
}