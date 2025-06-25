import BaseScreen from "@/components/base/BaseScreen";
import { StyleSheet, View } from "react-native";
import { MD3Theme } from "react-native-paper";
import CodeInput from "./inner/CodeInput";
import CodeOutput from "./inner/CodeOutput";

type Props = {
  theme: MD3Theme;
};

export default function EditorScreen({ theme }: Props) {
  return (
    <BaseScreen theme={theme} style={styles.container}>
      <View style={styles.leftArea}>
        <CodeInput />
      </View>
      <View style={styles.rightArea}>
        <CodeOutput />
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
