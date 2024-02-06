import { StatusBar } from 'expo-status-bar';
import {View,StyleSheet,Dimensions,Keyboard} from 'react-native'
import AddItem from './src/components/AddItem';
import Index from './src/components/Lista';
import React, { useState } from 'react';


const App = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [tasks, setTasks] = useState([])
  const screenWidth = Dimensions.get('window').width

  console.log("Tasks: ", tasks)

  return (
    <View style={styles.container}>
       <AddItem
         taskTitle={taskTitle}
         setTaskTitle={setTaskTitle}
         taskDescription={taskDescription}
         setTaskDescription={setTaskDescription}
         tasks={tasks}
         setTasks={setTasks}
       />
       
       <Index
        tasks={tasks}
        screenWidth={screenWidth}
       ></Index>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
