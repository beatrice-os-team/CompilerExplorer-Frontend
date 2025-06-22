import AboutScreen from "@/components/screens/about/AboutScreen";
import HomeScreen from "@/components/screens/home/HomeScreen";
import useAppColorScheme from "@/config/AppColorScheme";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useColorScheme } from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import Title from "@/components/top-bar/Title";
import CustomDrawer from "@/components/top-bar/CustomDrawer";

export default function RootLayout() {
  const DrawerNav = createDrawerNavigator();
  const colorScheme = useAppColorScheme();
  colorScheme.colorScheme = useColorScheme() ?? "light";
  const theme = colorScheme.colorScheme === "dark" ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider>
      <DrawerNav.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.surface,
            borderWidth: 0,
          },
          headerTitle(_props) {
            return <Title theme={theme} />;
          },
          headerTitleAlign: "center",
          headerTintColor: theme.colors.onSurface,
          headerRight: () => {
            return (
              <></>
            )
          }
        }}
        drawerContent={(props) => {
          return <CustomDrawer theme={theme} {...props} />;
        }}
      >
        <DrawerNav.Screen name="home" component={HomeScreen} />
        <DrawerNav.Screen name="about" component={AboutScreen} />
      </DrawerNav.Navigator>
    </PaperProvider>
  );
}
