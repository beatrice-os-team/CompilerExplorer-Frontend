import BaseScreen from "@/components/base/BaseScreen";
import { ScrollView, StyleSheet } from "react-native";
import Markdown from "react-native-markdown-display";
import { MD3Theme } from "react-native-paper";
import { AboutMarkdown } from "@/constants/about/AboutMd";

type Props = {
  theme: MD3Theme;
}

export default function AboutScreen({ theme }: Props) {
  return (
    <BaseScreen theme={theme}>
      <ScrollView contentContainerStyle={styles.container}>
        <Markdown style={{
          body: { color: theme.colors.onSurface },
        }}>
          {AboutMarkdown}
        </Markdown>
      </ScrollView>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
});
