import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet, Dimensions} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddItem from './src/components/AddItem';
import Index from './src/components/Lista';
import React, { useState, useEffect } from 'react';
import ModalDelete from './src/components/ModalDelete';


const App = () => {
  // Definiendo variables necesarias
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


  // Función para guardar las tareas en un archivo JSON
  const storeTasks = async (tasks) => {
    try {
      const jsonValue = JSON.stringify(tasks);
      await AsyncStorage.setItem('@my_super_store:tasks', jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

  // Función para buscar las tareas en el almacenamiento
  const getTasks = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@my_super_store:tasks');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  useEffect(() => {
    const loadTasks = async () => {
      const loadedTasks = await getTasks();
      setTasks(loadedTasks);
    };
    loadTasks();
  }, []);

  useEffect(() => {
    storeTasks(tasks);
  }, [tasks]);

  

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
    backgroundColor: '#3B477D',
  },
});
