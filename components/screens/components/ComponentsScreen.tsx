import BaseScreen from "@/components/base/BaseScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { ActivityIndicator, Banner, Button, Chip, Dialog, Divider, List, MD3Theme, Portal, RadioButton, Searchbar, SegmentedButtons, Switch, Text, TextInput } from "react-native-paper";

type Props = {
  theme: MD3Theme;
}

export default function ComponentsScreen({ theme }: Props) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [checked, setChecked] = useState("first");
  const [searchText, setSearchText] = useState("");

  return (
    <BaseScreen theme={theme} style={styles.container}>
      <View style={styles.leftArea}>
        <ScrollView contentContainerStyle={styles.leftArea}>
          <Button mode="contained" onPress={() => setShowDialog(true)}>
            <Text style={{ color: theme.colors.onPrimary }}>Hello</Text>
          </Button>
          <Button mode="contained-tonal" onPress={() => {}}>
            <Text>Hello</Text>
          </Button>
          <Button mode="elevated" onPress={() => {}}>
            <Text>Hello</Text>
          </Button>
          <Button mode="outlined" onPress={() => {}}>
            <Text>Hello</Text>
          </Button>
          <Button mode="text" onPress={() => {}}>
            <Text>Hello</Text>
          </Button>
          <List.Accordion
            title="Parent"
            left={props => (
              <MaterialIcons name="folder" style={props.style} size={24} color={props.color} />
            )}
            right={_props => <></>}
          >
            <List.Item title="First item" left={props => (
              <MaterialIcons name="folder" style={props.style} size={24} color={props.color} />
            )} />
            <List.Item title="Second item" left={props => (
              <MaterialIcons name="folder" style={props.style} size={24} color={props.color} />
            )} />
            <List.Item title="Third item" left={props => (
              <MaterialIcons name="folder" style={props.style} size={24} color={props.color} />
            )} />
          </List.Accordion>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <RadioButton
              value="third"
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('third')}
            />
          </View>
          <SegmentedButtons
            value={checked}
            onValueChange={setChecked}
            buttons={[
              { value: 'first', label: 'First' },
              { value: 'second', label: 'Second' },
              { value: 'third', label: 'Third' },
            ]}
          />
        </ScrollView>
      </View>
      <View style={styles.rightArea}>
        <ScrollView contentContainerStyle={styles.rightArea}>
          <TextInput label="Name" mode="flat" />
          <TextInput label="Name" mode="outlined" />
          <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(prev => !prev)} />
          <ActivityIndicator />
          <Banner visible={true} actions={[{ label: "Close", onPress: () => {} }]}>
            <Text>{`Hello, I\'m banner`}</Text>
          </Banner>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Chip onPress={() => {}}>Example Chip</Chip>
            <Chip onPress={() => {}}>Example Chip</Chip>
            <Chip onPress={() => {}}>Example Chip</Chip>
            <Chip onPress={() => {}}>Example Chip</Chip>
            <Chip onPress={() => {}}>Example Chip</Chip>
          </View>
          <Divider />
          <Divider />
          <Divider />
          <Divider />
          <Divider />
          <Searchbar
            icon={props => (
              <MaterialIcons name="search" size={24} color={props.color} />
            )}
            right={props => (
              <TouchableOpacity onPress={() => setSearchText("")}>
                <MaterialIcons name="close" size={24} color={props.color} style={props.style} />
              </TouchableOpacity>
            )}
            placeholder="Search"
            onChangeText={setSearchText}
            value={searchText}
          />
        </ScrollView>
      </View>
      <Portal>
        <Dialog visible={showDialog} onDismiss={() => setShowDialog(false)}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">This is simple dialog</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setShowDialog(false)}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 25,
    gap: 25,
  },
  leftArea: {
    flex: 1,
    gap: 10,
  },
  rightArea: {
    flex: 1,
    gap: 10,
  },
});
