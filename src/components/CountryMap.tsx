import { SafeAreaView } from "react-native"
import { Country } from "../entities/Country"
import { styles } from "../styles/Styles"
import WebView from "react-native-webview"

export default function CountryMap({ country }: { country: Country }) {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: country.map }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
}
