import { MaterialIcons } from "@expo/vector-icons";
import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer, MD3Theme } from "react-native-paper";

type CustomDrawerContentProps = DrawerContentComponentProps & {
  theme: MD3Theme;
}

export default function CustomDrawer(props: CustomDrawerContentProps) {
  const { theme } = props;

  const itemList = [
    [
      {
        label: "Home",
        icon: ({ color, size }: { color: string, size: number }) => {
          return <MaterialIcons name="home" color={color} size={size} />;
        },
        route: "index",
      },
    ], [
      {
        label: "Editor",
        icon: ({ color, size }: { color: string, size: number }) => {
          return <MaterialIcons name="code" color={color} size={size} />;
        },
        route: "editor",
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
              key={item.route}
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
