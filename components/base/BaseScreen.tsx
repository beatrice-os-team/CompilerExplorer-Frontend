import useAppColorScheme from "@/config/AppColorScheme";
import { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider, Surface } from "react-native-paper";

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export default function BaseScreen({ children, style }: Props) {
  const colorScheme = useAppColorScheme();
  const theme = colorScheme.colorScheme === "dark" ? MD3DarkTheme : MD3LightTheme;

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
