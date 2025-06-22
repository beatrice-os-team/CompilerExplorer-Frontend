import BaseScreen from "@/components/base/BaseScreen";
import { StyleSheet } from "react-native";
import { MD3Theme, Text } from "react-native-paper";

type Props = {
  theme: MD3Theme;
}

export default function AboutScreen({ theme }: Props) {
  return (
    <BaseScreen theme={theme} style={styles.container}>
      <Text>About</Text>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
