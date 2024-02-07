import { StyleSheet, Text, View, FlatList, Modal } from 'react-native'
import ListItem from './ListItem'
import React from 'react'

const Index = ({tasks, screenWidth, setTaskSelected, onHandlerModal}) => {
  return (
    <View style={styles.tasksContainer}>
      <FlatList
        pagingEnabled={false}
        data={tasks}
        renderItem={({item}) =>{
          return <ListItem 
            style={{flex: 1}}
            item={item}
            setTaskSelected={setTaskSelected}
            onHandlerModal={onHandlerModal}
            screenWidth={screenWidth}
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