import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const AddItem = ({ taskTitle, setTaskTitle, taskDescription, setTaskDescription, tasks, setTasks }) => {
 const addNewTask = (tasks => [
  ...tasks,
  {id: Math.random().toString(), title:taskTitle, description:taskDescription}
 ]);
 
 const handleAddTask = () => {
  const updatedTasks = addNewTask(tasks);
  setTasks(updatedTasks);
  setTaskTitle('');
  setTaskDescription('');
  console.log(tasks)
 };


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
