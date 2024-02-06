import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListItem from './ListItem'
import React from 'react'

const Index = ({tasks, screenWidth}) => {
  return (
    <View style={styles.tasksContainer}>
      <FlatList
        pagingEnabled={true}
        data={tasks}
        renderItem={({item}) =>{
          return <ListItem 
            item={item}
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