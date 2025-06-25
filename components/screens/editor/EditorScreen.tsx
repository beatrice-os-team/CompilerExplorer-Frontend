import BaseScreen from "@/components/base/BaseScreen";
import { MD3Theme } from "react-native-paper";

type Props = {
  theme: MD3Theme;
};

export default function EditorScreen({ theme }: Props) {
  return (
    <BaseScreen theme={theme}>
      <></>
    </BaseScreen>
  );
}
