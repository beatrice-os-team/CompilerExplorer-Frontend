import BaseScreen from "@/components/base/BaseScreen";
import useWasmViewModel from "@/viewmodel/WasmViewModel";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, MD3Theme, Text } from "react-native-paper";

type Props = {
  theme: MD3Theme;
}

export default function HomeScreen({ theme }: Props) {
  const wasmViewModel = useWasmViewModel();

  const [text, setText] = useState("init");

  return (
    <BaseScreen theme={theme} style={styles.container}>
      <Button onPress={async () => {
        const wasm = await wasmViewModel.getWasm();
        setText(wasm._test(1));
      }}>
        <Text>{text}</Text>
      </Button>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
