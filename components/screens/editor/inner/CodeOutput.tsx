import { StyleSheet, View } from "react-native";
import { MD3Theme, Text } from "react-native-paper";

type Props = {
  theme: MD3Theme;
  output: string;
};

export default function CodeOutput({ theme, output }: Props) {
  const borderColor = theme.colors.secondaryContainer;
  const backgroundColor = theme.colors.background;

  return (
    <View style={[styles.container, { borderColor, backgroundColor }]}>
      <Text style={styles.text}>{output}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 25,
    padding: 10,
  },
  text: {
    flex: 1,
  },
});
