import HomeScreen from "@/components/screens/home/HomeScreen";
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { StyleSheet, useColorScheme } from "react-native";
import { Drawer, MD3DarkTheme, MD3LightTheme, PaperProvider, Text } from "react-native-paper";

export default function RootLayout() {
  const DrawerNav = createDrawerNavigator();
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider>
      <DrawerNav.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.surface,
            borderWidth: 0,
          },
          headerTitle(_props) {
            return <Text style={styles.headerTitle}>Compiler Explorer</Text>;
          },
          headerTitleAlign: "center",
          headerTintColor: theme.colors.onSurface,
          drawerStyle: {
            backgroundColor: theme.colors.surface,
          },
        }}
        drawerContent={props => {
          return (
            <CustomDrawerContent {...props} />
          )
        }}
      >
        <DrawerNav.Screen name="home" component={HomeScreen} />
      </DrawerNav.Navigator>
    </PaperProvider>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <Drawer.Section>
        <Drawer.Item
          label="Home"
          onPress={() => props.navigation.navigate('Home')}
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
