import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Compiler Explorer",
        headerTitleAlign: "center",
      }}
    />
  );
}
