import { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { MD3Theme, PaperProvider, Surface } from "react-native-paper";

type Props = PropsWithChildren<{
  theme: MD3Theme;
  style?: StyleProp<ViewStyle>;
}>;

export default function BaseScreen({ children, theme, style }: Props) {
  return (
    <PaperProvider theme={theme}>
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
