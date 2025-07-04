import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

type Props = {
  exampleCode: string;
  onChangeCode: (code: string) => void;
};

export default function CodeInput({ exampleCode, onChangeCode }: Props) {
  const [code, setCode] = useState(exampleCode);
  useEffect(() => {
    onChangeCode(code);
  }, [code, onChangeCode]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={code}
        onChangeText={setCode}
        mode="outlined"
        label="Source Code"
        placeholder="Enter your code here"
        textAlignVertical="top"
        textAlign="left"
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    flex: 1,
  },
});
