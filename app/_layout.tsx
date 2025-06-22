import AboutScreen from "@/components/screens/about/AboutScreen";
import HomeScreen from "@/components/screens/home/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useColorScheme } from "react-native";
import { MD3DarkTheme, MD3LightTheme, MD3Theme, PaperProvider } from "react-native-paper";
import Title from "@/components/top-bar/Title";
import CustomDrawer from "@/components/top-bar/CustomDrawer";
import RightButtonRow from "@/components/top-bar/RightButtonRow";
import { useState } from "react";

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
        <DrawerNav.Screen name="home" component={() => <HomeScreen theme={theme} />} />
        <DrawerNav.Screen name="about" component={() => <AboutScreen theme={theme} />} />
      </DrawerNav.Navigator>
    </PaperProvider>
  );
}
