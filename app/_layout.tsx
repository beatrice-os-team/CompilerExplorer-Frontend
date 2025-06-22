import AboutScreen from "@/components/screens/about/AboutScreen";
import HomeScreen from "@/components/screens/home/HomeScreen";
import useAppColorScheme from "@/config/AppColorScheme";
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { StyleSheet, useColorScheme } from "react-native";
import { Drawer, MD3DarkTheme, MD3LightTheme, MD3Theme, PaperProvider, Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

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
            return (
              <Text style={[styles.headerTitle, { color: theme.colors.onSurface }]}>
                Compiler Explorer
              </Text>
            );
          },
          headerTitleAlign: "center",
          headerTintColor: theme.colors.onSurface,
        }}
        drawerContent={(props) => {
          return <CustomDrawerContent theme={theme} {...props} />;
        }}
      >
        <DrawerNav.Screen name="home" component={HomeScreen} />
        <DrawerNav.Screen name="about" component={AboutScreen} />
      </DrawerNav.Navigator>
    </PaperProvider>
  );
}

type CustomDrawerContentProps = DrawerContentComponentProps & {
  theme: MD3Theme;
}

function CustomDrawerContent(props: CustomDrawerContentProps) {
  const { theme } = props;

  return (
    <DrawerContentScrollView style={{
      backgroundColor: theme.colors.background,
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
    }}>
      <Drawer.Section>
        <Drawer.Item
          theme={theme}
          icon={({ color, size }) => <MaterialIcons name="home" color={color} size={size} />}
          label="Home"
          onPress={() => props.navigation.navigate("home")}
        />
      </Drawer.Section>
      <Drawer.Section>
        <Drawer.Item
          theme={theme}
          icon={({ color, size }) => <MaterialIcons name="info" color={color} size={size} />}
          label="About"
          onPress={() => props.navigation.navigate("about")}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
