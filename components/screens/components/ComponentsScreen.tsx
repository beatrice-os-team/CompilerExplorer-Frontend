import BaseScreen from "@/components/base/BaseScreen";
import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

type Props = {
  theme: MD3Theme;
}

export default function ComponentsScreen({ theme }: Props) {
  return (
    <BaseScreen theme={theme} style={styles.container}>
      <></>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
});
