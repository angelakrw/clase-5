import { StyleSheet, Text, View, FlatList, Modal } from 'react-native'
import ListItem from './ListItem'
import React from 'react'

const Index = ({tasks, screenWidth, modalVisible, setModalVisible, taskSelected, setTaskSelected, onHandlerModal}) => {
  return (
    <View style={[styles.tasksContainer, {width: screenWidth - 20}]}>
      <FlatList
        pagingEnabled={true}
        data={tasks}
        renderItem={({item}) =>{
          return <ListItem 
            item={item}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setTaskSelected={setTaskSelected}
            onHandlerModal={onHandlerModal}
            />
        }}
        keyExtractor={item => item.id} 
      />

    </View>
  )
}

export default Index;

const styles = StyleSheet.create({
  tasksContainer: {
    marginTop: 10,
  }
})