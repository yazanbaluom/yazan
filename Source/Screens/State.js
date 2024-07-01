import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const State = () => {
  const[arr,setarr]=useState([])
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{
        arr.push({
          name:"mosa",
          age:"-"
        })
        setarr((v)=>[...v])
        console.log(arr);
      }}  style={styles.plus}>

      </TouchableOpacity>

      {arr.map((items,index)=>
        <View style={styles.box}>
          <Text>{items.name}</Text>
        </View>
      )}

<TouchableOpacity onPress={()=>{
        arr.pop()
        setarr((v)=>[...v])
        console.log(arr);
      }}  style={styles.plus}>
      </TouchableOpacity>
    </View>
  )
}

export default State

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  plus:{
    height:100,
    width:200,
    borderWidth:5,
  },
  box:{
    height:50,
    width:50,
    // backgroundColor:'red',
    borderWidth:5,
    margin:5
  }
})