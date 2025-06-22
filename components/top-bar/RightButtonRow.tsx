import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { IconButton, MD3Theme } from "react-native-paper";

type Props = {
  theme: MD3Theme;
  onColorSchemeToggle: () => void;
}

export default function RightButtonRow({ theme, onColorSchemeToggle }: Props) {
  const iconList = [
    {
      icon: ({ color, size }: { color: string, size: number }) => {
        return <MaterialCommunityIcons name="theme-light-dark" color={color} size={size} />;
      },
      onPress: onColorSchemeToggle,
    },
  ];

  return (
    <View>
      {iconList.map((icon, index) => {
        return (
          <IconButton
            key={index}
            theme={theme}
            icon={icon.icon}
            onPress={icon.onPress}
          />
        );
      })}
    </View>
  )
}
