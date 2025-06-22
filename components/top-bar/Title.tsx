import { MD3Theme, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

type Props = {
  theme: MD3Theme;
}

export default function Title({ theme }: Props) {
  return (
    <Text style={[styles.headerTitle, { color: theme.colors.onSurface }]}>
      Compiler Explorer
    </Text>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
