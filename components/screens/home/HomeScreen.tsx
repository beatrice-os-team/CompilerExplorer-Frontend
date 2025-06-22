import BaseScreen from "@/components/base/BaseScreen";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function HomeScreen() {
  return (
    <BaseScreen style={styles.container}>
      <Text>Home</Text>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
