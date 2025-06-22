import { Appbar, PaperProvider } from "react-native-paper";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => {}} />
        <Appbar.Content
          title="Compiler Explorer"
          titleStyle={{ alignSelf: "center" }}
        />
      </Appbar.Header>
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}
