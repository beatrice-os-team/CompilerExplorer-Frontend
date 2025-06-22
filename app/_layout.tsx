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

  const itemList = [
    [
      {
        label: "Home",
        icon: ({ color, size }: { color: string, size: number }) => {
          return <MaterialIcons name="home" color={color} size={size} />;
        },
        route: "home",
      },
    ], [
      {
        label: "About",
        icon: ({ color, size }: { color: string, size: number }) => {
          return <MaterialIcons name="info" color={color} size={size} />;
        },
        route: "about",
      },
    ],
  ];

  return (
    <DrawerContentScrollView style={{
      backgroundColor: theme.colors.background,
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
    }}>
      {itemList.map((section, sectionIndex) => (
        <Drawer.Section key={sectionIndex}>
          {section.map((item, itemIndex) => (
            <Drawer.Item
              key={itemIndex}
              theme={theme}
              label={item.label}
              icon={item.icon}
              onPress={() => props.navigation.navigate(item.route)}
            />
          ))}
        </Drawer.Section>
      ))}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
