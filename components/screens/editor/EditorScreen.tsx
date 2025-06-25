import BaseScreen from "@/components/base/BaseScreen";
import { StyleSheet, View } from "react-native";
import { MD3Theme, Text } from "react-native-paper";

type Props = {
  theme: MD3Theme;
};

export default function EditorScreen({ theme }: Props) {
  return (
    <BaseScreen theme={theme} style={styles.container}>
      <View style={styles.leftArea}>
        <Text>Left</Text>
      </View>
      <View style={styles.rightArea}>
        <Text>Right</Text>
      </View>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 25,
    padding: 25,
  },
  leftArea: {
    flex: 1,
  },
  rightArea: {
    flex: 1,
  },
});
