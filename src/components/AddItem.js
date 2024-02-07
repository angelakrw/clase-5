import { Button, StyleSheet, Text, TextInput, View, Keyboard, Alert } from 'react-native'
import uuid from 'react-native-uuid'

const AddItem = ({ taskTitle, setTaskTitle, taskDescription, setTaskDescription, tasks, setTasks }) => {
 const addNewTask = (tasks => [
  ...tasks,
  {id: uuid.v4(), title:taskTitle, description:taskDescription}
 ]);
 
 const handleAddTask = () => {
  if (taskTitle.trim() !== '') {
    const updatedTasks = addNewTask(tasks)
    setTasks(updatedTasks)
    setTaskTitle('')
    setTaskDescription('')
    Keyboard.dismiss()
  } else {
    Alert.alert('error', 'La tarea necesita un título.')
  }
 }


 return (
    <View style={styles.container}>
      <TextInput style={[styles.TextInput, styles.title]}
        editable
        placeholder='Título'
        value={taskTitle}
        onChangeText={text => setTaskTitle(text)}
      ></TextInput>

      <TextInput style={styles.TextInput}
        editable
        multiline
        placeholder='Descripción'
        value={taskDescription}
        onChangeText={text => setTaskDescription(text)}
      ></TextInput>

      <Button style={styles.Button}
        title='Añadir'
        color={'darkblue'}
        onPress={handleAddTask}
      ></Button>
    </View>
 );
};

export default AddItem

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: 'lightblue'
    },

    TextInput: {
        fontWeight: 'bold',
        fontSize: 26,
        paddingVertical: 8,
    },

    Button: {
        fontSize: 60
    }

})
