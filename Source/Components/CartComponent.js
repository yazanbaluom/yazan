import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState,useContext } from 'react'
import expimages from '../assets/images/expimages'
import AppContext from '../../Store/AppContext';

const CartComponent = (info) => {
    const [qty, setqty] = useState(info.amount);
    const {Cart,Setcart}= useContext(AppContext);
    const Mines=()=>{
      if (qty>1) {
          setqty(qty - 1)
      }
  }

    
  return (
    <View style={styles.CartComponent}>
        <View style={styles.cproduct}>
        <View style={styles.cimg}>
        <Image style={styles.cimg} source={info.img} />
        </View>
        <View style={styles.border}></View>
            <View style={styles.cdesc}>
            {/* <View style={styles.textC}> */}
            <Text style={styles.productinfo}>{info.name}</Text>
            <Text style={styles.productinfo}>Amount: {qty}</Text>
            <Text style={styles.productinfo}>Total Price: {qty * info.price}</Text>
        </View>

        <TouchableOpacity onPress={()=>{
          //index = info.index , array = cart
          Cart.splice(info.index, 1);
          Setcart((value)=>[...value])
          console.log("aaaa");
        }}>
            <Image style={styles.Trash} source={expimages.Trash()} />
        </TouchableOpacity>
        </View>

        <View style={styles.qtyview}>
            <Pressable onPress={()=>setqty(qty + 1)}>
                <Text style={styles.qtytxt}>+</Text>
            </Pressable>

            <Text style={styles.qtytxt}>{qty}</Text>

            <Pressable onPress={()=>Mines()}>
                <Text style={styles.qtytxt}>-</Text>
            </Pressable>
        </View>
  </View>

  )
}

export default CartComponent

const styles = StyleSheet.create({
  container:{
  flex:1,
},
    CartComponent:{
        height:220,
        // borderWidth:1,
        backgroundColor:'white',
        borderRadius:25
    },
    container: {
        flex: 1,
        padding:10,
      },
      border:{
    backgroundColor:'red',
    height:'100',
    width:'100',
      },
      cproduct: {
        height: 150,
        width: 375,
        // borderWidth: 1,
        borderRadius:25,
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding:10,
      },
      cimg: {
        height: 130,
        width: 130,
        borderRadius: 25,
      },
      productinfo: {
        color: 'black',
        fontSize: 25,
        margin:2,
      },
      border:{
        height:153,
        width:5,
      },
qtyview: {
        //  borderWidth: 1,
        width: '80%',
        alignself: 'center',
        alignitems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',
        // height:100,
    },
    qtytxt: {
        fontSize: 45,
        color:'black'
        },
})