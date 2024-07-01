import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import ScreenNames from '../../Routes/ScreenNames'

const Product = (props) => {
    const navigation = useNavigation()
    const [qty, setqty] = useState(0)
    return (
        <Pressable onPress={()=>{navigation.navigate(ScreenNames.Orderinfo,{...props})}}>
        <View style={styles.product}>

            <View style={styles.productimg}>
                <Image style={styles.img} source={props.img} />
            </View>

            <View style={styles.desc}>
                <View style={styles.textC}>
                    <Text style={styles.productinfo}>Name: {props.name}</Text>
                   
                    <Text style={styles.productinfo}>price: {props.price}</Text>
                    
                    {/* <View style={styles.qtyview}>
                        <Pressable onPress={()=>setqty(qty + 1)}>
                            <Text style={styles.qtytxt}>+</Text>
                        </Pressable>

                        <Text style={styles.qtytxt}>{qty}</Text>

                        <Pressable onPress={()=>setqty(qty - 1)}>
                            <Text style={styles.qtytxt}>-</Text>
                        </Pressable>
                    </View> */}
                    
                   
                        {/* <Text style={styles.Info}>Info</Text> */}
                   

                   

                </View>

            </View>
        </View>
</Pressable>

    )
}
export default Product

const styles = StyleSheet.create({

    product: {
        height: 370,
        width: '100%',
        alignItems: 'center',
        margin: 5,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 15,
        padding: 10,
        // borderwidth:1
    },
    border: {
        height: '5%',
        width: '100%'
    },
    productimg: {
        height: '60%',
        width: '100%',
        // margin:5
        // borderwidth:1
    },
    desc: {
        height: "40%",
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // borderWidth: 2,
    },
    productinfo: {
        fontSize: 25,
        color: 'black',
        width: '66%',
        marginLeft: 2,
        // margin:10
    },
    textC: {
        justifyContent: 'center',
        width: '100%',
        margin: 5,
        padding: 20,
    },
    img: {
        height: '100%',
        width: '100%',
        // resizeMode:'contain'
    },
    // Info: {
    //     textAlign: 'right',
    //     fontSize: 40,
    //     color: 'black',
    // },
    qtyview: {
        //  borderWidth: 1,
        width: '80%',
        alignself: 'center',
        alignitems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around'
    },
    qtytxt: {
    fontSize: 20,
    color:'black'
    }

})