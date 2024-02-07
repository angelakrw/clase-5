import { Button, Modal, StyleSheet, Text, View } from 'react-native'


const ModalDelete = ({modalVisible, setModalVisible, taskSelected, deleteTask}) => {
  return (
    <Modal
      animationType='slide'
      visible={modalVisible}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.prompt}>¿Está seguro que desea eliminar la tarea?</Text>
        </View>
        <View>
          <Text style={styles.title}>{taskSelected.title}</Text>
        </View>
        <View style={styles.buttons}>
          <Button
            onPress={()=>setModalVisible(false)}
            title='Volver'
          />
          <Button
            onPress={()=>deleteTask(taskSelected)}
            title='Confirmar'
          />
        </View>
      </View>

    </Modal>
  )
}

export default ModalDelete

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

  prompt: {
    fontSize: 30,
  },

  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },

  buttons: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  }
})
