import { Button, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ScreenNames from '../../Routes/ScreenNames'
import expimages from '../assets/images/expimages'

const Splash = (props) => {
  return (
    <ImageBackground 
    source={expimages.backgroundimg()}
    style={styles.container}>

<Pressable style={styles.btn1}
          onPress= {()=> props.navigation.navigate(ScreenNames.home)} 
          >
    
      <Text style={styles.txt1}>Menu</Text>

      {/* <Text style={styles.txt1}>Lets eat</Text> */}
      </Pressable>
      {/* <Button title= {'Cart'}
      // onPress= {()=> props.navigation.navigate(ScreenNames.cart)}/> */}
      <View style = {styles.qtyview}>

      </View>

    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  container:{
    flex:1
    },
    
  
    btn1:{
      borderWidth:1,
     backgroundColor:'black',
      width:200,
      height:100,
      marginLeft:95,
      marginTop:450,
      borderRadius:3100,
alignContent:'center',
    },

    txt1:{
     color:'white',
    fontSize:30,
alignContent:'center',
alignSelf:'center',
marginTop:25
    }



})