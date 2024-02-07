import { StatusBar } from 'expo-status-bar';
import {View,StyleSheet,Dimensions,Keyboard} from 'react-native'
import AddItem from './src/components/AddItem';
import Index from './src/components/Lista';
import React, { useState } from 'react';
import ModalDelete from './src/components/ModalDelete';


const App = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [tasks, setTasks] = useState([])

  const [taskSelected, setTaskSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const screenWidth = Dimensions.get('window').width

  const onHandlerModal = (task) => {
    setTaskSelected(task)
    setModalVisible(true)
  }

  const deleteTask = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id))
    setModalVisible(false)
  }

  

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
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        taskSelected={taskSelected}
        setTaskSelected={setTaskSelected}
        onHandlerModal={onHandlerModal}
      ></Index>

      <ModalDelete
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        taskSelected={taskSelected}
        deleteTask={deleteTask}
      />
      

    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
});
