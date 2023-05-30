// import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';
import React, {useState} from 'react';
// import { styled } from "nativewind";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask=()=>{
    // Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
  }

  const completeTask =(index)=>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>

      {/* {today's task} */}
      {/* className="flex-1 items-center justify-center" */}
      <View>
        <Text style={styles.sectionTitle}>
          Today's Task
        </Text>
        <View style={styles.items}>

          {/* {This is where all the tasks will go} */}
          {
            taskItems.map((item, index)=>{
              return <TouchableOpacity key={index} onPress={()=>completeTask(index)}><Task  text={item} /></TouchableOpacity>
            
            })
          }
          {/* <Task text={'Text 1'} />
          <Task text={'Text 2'} /> */}

        </View>
      </View>

      {/* {Write a task} */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder="Write a task " value={task} onChangeText={text => setTask(text)}></TextInput>
        <TouchableOpacity onPress={()=>handleAddTask()}>
          <View style={styles.addWrapper}><Text style={styles.addText}>+</Text></View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    padding:10,
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
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    padding:15,
    width:250,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1
  }, 
});
