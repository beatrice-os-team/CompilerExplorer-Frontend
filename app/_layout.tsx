import AboutScreen from "@/components/screens/about/AboutScreen";
import ComponentsScreen from "@/components/screens/components/ComponentsScreen";
import EditorScreen from "@/components/screens/editor/EditorScreen";
import HomeScreen from "@/components/screens/home/HomeScreen";
import CustomDrawer from "@/components/top-bar/CustomDrawer";
import RightButtonRow from "@/components/top-bar/RightButtonRow";
import Title from "@/components/top-bar/Title";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useState } from "react";
import { useColorScheme } from "react-native";
import { MD3DarkTheme, MD3LightTheme, MD3Theme, PaperProvider } from "react-native-paper";

export default function RootLayout() {
  const DrawerNav = createDrawerNavigator();

  const [theme, setTheme] = useState<MD3Theme>(
    useColorScheme() === "dark" ? MD3DarkTheme : MD3LightTheme
  );

  return (
    <PaperProvider>
      <DrawerNav.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.surface,
            borderWidth: 0,
          },
          headerTitle: () => <Title theme={theme} />,
          headerTitleAlign: "center",
          headerTintColor: theme.colors.onSurface,
          headerRight: () => (
            <RightButtonRow
              theme={theme}
              onColorSchemeToggle={() => {
                setTheme(theme === MD3DarkTheme ? MD3LightTheme : MD3DarkTheme);
              }}
            />
          ),
        }}
        drawerContent={(props) => {
          return <CustomDrawer theme={theme} {...props} />;
        }}
      >
        <DrawerNav.Screen name="index" component={() => <HomeScreen theme={theme} />} />
        <DrawerNav.Screen name="about" component={() => <AboutScreen theme={theme} />} />
        <DrawerNav.Screen name="editor" component={() => <EditorScreen theme={theme} />} />
        <DrawerNav.Screen name="components" component={() => <ComponentsScreen theme={theme} />} />
      </DrawerNav.Navigator>
    </PaperProvider>
  );
}
