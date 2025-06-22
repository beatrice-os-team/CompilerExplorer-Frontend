import { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Surface, PaperProvider } from "react-native-paper";

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export default function BaseScreen({ children, style }: Props) {
  return (
    <Surface style={[styles.container, style]}>
      {children}
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
