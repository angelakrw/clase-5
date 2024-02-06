import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListItem = ({item, screenWidth}) => {
  return (
    <View style={[styles.item]}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
  item: {
    padding: 5,
    paddingLeft: 20,
    marginTop: 5,
    backgroundColor: 'pink'
  },

  itemTitle: {
    fontWeight: 'bold',
    fontSize: 25,
  },

  itemDescription: {
    fontSize: 20,
  }
})