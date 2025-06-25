import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

export default function CodeInput() {
  return (
    <View style={style.container}>
      <TextInput
        style={style.textInput}
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

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    flex: 1,
  },
});
