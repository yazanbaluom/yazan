import { Image, Pressable, StyleSheet, Text, View,ImageBackground } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import ScreenNames from '../../Routes/ScreenNames'
import expimages from '../assets/images/expimages'
import AppContext from '../../Store/AppContext'

const Orderinfo = (props) => {
    const {Cart,Setcart}= useContext(AppContext);
    const info = props.route.params;
    const navigation = useNavigation()
    const [qty, setqty] = useState(1)

    const Mines=()=>{
        if (qty>1) {
            setqty(qty - 1)
        }
    }
    return (
        
        <ImageBackground 
        source={expimages.backgroundimg()} 
        style={styles.product}>
            <View style={styles.productimg}>
                <Image style={styles.img} source={info?.img} />
            </View>

            <View style={styles.desc}>
                <View style={styles.textC}>
                    <Text style={styles.productinfo}>Name: {info.name}</Text>
                   
                    <Text style={styles.productinfo}>Price: {info.price}</Text>
                    
                    {/* <View style={styles.qtyview}>
                        <Pressable onPress={()=>setqty(qty + 1)}>
                            <Text style={styles.qtytxt}>+</Text>
                        </Pressable>

                        <Text style={styles.qtytxt}>{qty}</Text>

                        <Pressable onPress={()=>Mines()}>
                            <Text style={styles.qtytxt}>-</Text>
                        </Pressable>
                    </View> */}

 
                    <Pressable style={styles.addcart} onPress={()=>{
                            Cart.push({
                                ...info,
                                qty
                            })
                            Setcart((v)=>[...v])
                            console.log(Cart);
                            navigation.goBack();
                          }}  
                    >
                
                        {/* // navigation.navigate(ScreenNames.cart,{...info , amount: qty})
                        }}> */}
                    <Text style={styles.Addtocart}>Add To Cart</Text>
                    </Pressable>

                </View>

            </View>

        </ImageBackground>

    )
}
export default Orderinfo

const styles = StyleSheet.create({

    product: {
        flex:1,
        // height: 430,
        // width: '95%',
        alignItems: 'center',
        margin: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        elevation: 5,
        borderRadius: 15,
        // padding: 10,
        borderWidth:5,
    },
    border: {
        height: '5%',
        width: '100%'
    },
    productimg: {
        height: '40%',
        width: '100%',
        // margin:5
        // borderWidth:1,
        borderRadius:10
    },
    desc: {
        height: "50%",
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // borderWidth: 1,
    },
    productinfo: {
        fontSize: 35,
        color: 'black',
        width: '100%',
        marginLeft: 2,
        backgroundColor:'#fff',
        elevation:5,
        borderRadius:20,
        padding:10,
        margin:10
        // margin:10
        // borderWidth:1
    },
    textC: {
        justifyContent: 'center',
        width: '100%',
        margin: 5,
        padding: 20,
        // borderWidth:1
    },
    img: {
        height: '100%',
        width: '100%',
        // resizeMode:'contain'
    },
    Info: {
        textAlign: 'right',
        fontSize: 40,
        color: 'black',
    },
    // qtyview: {
    //     //  borderWidth: 1,
    //     width: '80%',
    //     alignself: 'center',
    //     alignitems: 'center',
    //     flexDirection: 'row',
    //     alignSelf: 'center',
    //     justifyContent: 'space-around'
    // },
    // qtytxt: {
    // fontSize: 45,
    // color:'black'
    // },
    addcart: {
        width:'100%',
        // height:200,
        borderWidth:2,
        // borderColor:'#000',
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 20, 
        backgroundColor: 'red',
        flexDirection:'row'
      },
Addtocart:{
    fontSize:50,
    color: 'black',
},
})