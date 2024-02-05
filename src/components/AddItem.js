import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const AddItem = () => {
  return (
    <View style={styles.container}>

      <TextInput style={[styles.TextInput, styles.title]}
        editable
        placeholder='Título'
      ></TextInput>

      <TextInput style={styles.TextInput}
        editable
        multiline
        placeholder='Descripción'
      ></TextInput>
      
      <Button style={styles.Button}
        title='Añadir'
        color={'darkblue'}
      ></Button>
    </View>
  )
}

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