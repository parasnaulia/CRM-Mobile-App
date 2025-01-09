import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import LoginScreen from "./Screens/Auth/LoginScreen";
import Index from "../RealStateCrmMobileApp/Screens/Leads/Index";
import Customer from "./Screens/Customer/Customer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <LoginScreen /> */}
      <Index />
      {/* <Customer /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
