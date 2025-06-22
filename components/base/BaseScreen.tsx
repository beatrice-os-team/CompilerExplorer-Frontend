import { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Surface, PaperProvider } from "react-native-paper";

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export default function BaseScreen({ children, style }: Props) {
  return (
    <PaperProvider>
      <Surface style={[styles.container, style]}>
        {children}
      </Surface>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
