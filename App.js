import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddItem from './src/components/AddItem';
import React, { useState } from 'react';

const App = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [tasks, setTasks] = useState([])

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
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
