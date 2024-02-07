import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'


const ListItem = ({item, taskSelected, setTaskSelected, onHandlerModal, screenWidth}) => {
  return (
    <View style={[styles.item, {width: screenWidth - 20}]}>
      <View style={{flex: 1, marginRight: 10}}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      
      <Button
        onPress={() => onHandlerModal(item)}
        title='Borrar'
      />
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  item: {
    padding: 5,
    paddingLeft: 20,
    marginTop: 5,
    marginLeft: 5,
    marginBottom: 10,
    backgroundColor: '#85CAFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  itemTitle: {
    fontWeight: 'bold',
    fontSize: 25,
  },

  itemDescription: {
    fontSize: 20,
  }
})
