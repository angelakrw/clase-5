import { Button, Modal, StyleSheet, Text, View } from 'react-native'


const ModalDelete = ({modalVisible, setModalVisible, taskSelected, deleteTask}) => {
  return (
    <Modal
      animationType='slide'
      visible={modalVisible}
    >
      <View>
        <Text>¿Está seguro que desea eliminar la tarea?</Text>
      </View>
      <View>
        <Text>{taskSelected.title}</Text>
      </View>
      <View>
        <Button
          onPress={()=>setModalVisible(false)}
          title='Volver'
        />
        <Button
          onPress={()=>deleteTask(taskSelected)}
          title='Confirmar'
        />
      </View>

    </Modal>
  )
}

export default ModalDelete

const styles = StyleSheet.create({})
