// import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput } from 'react-native';
import Task from './components/Task';
// import { styled } from "nativewind";

export default function App() {
  return (
    <View style={styles.container}>

      {/* {today's task} */}
      <View className="flex-1 items-center justify-center">
        <Text style={styles.sectionTitle}>
          Today's Task
        </Text>
        <View style={styles.items}>

          {/* {This is where all the tasks will go} */}
          <Task text={'Text 1'} />
          <Task text={'Text 2'} />

        </View>
      </View>

      {/* {Write a task} */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder="Write a task for "></TextInput>
        {/* <TouchableOpacity>
          <View style={styles.addWrapper}></View>
        </TouchableOpacity> */}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  }

});
