import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, { useContext } from 'react';
import expimages from '../assets/images/expimages';
import CartComponent from '../Components/CartComponent';
import AppContext from '../../Store/AppContext';

const Cart = props => {
  const {Cart,Setcart}= useContext(AppContext);
  const info = props.route.params || {};
  console.log(info);

  return (
    
    <ImageBackground
      source={expimages.backgroundimg()}
      style={styles.container}>
        <View style={styles.back}>

      {/* { 
      props.route.params &&  
      
    } */}
      {Cart.map((info,index)=>
      <CartComponent key={index} index={index} name={info.name}price={info.price}amount={info.qty}img={info.img}/>
      )}
    </View>
    </ImageBackground>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  back:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.1)',
    padding:10,
  }

//   border:{
// backgroundColor:'red',
// height:'100',
// width:'100',
//   },
//   cproduct: {
//     height: 153,
//     width: 375,
//     borderWidth: 1,
//     borderRadius: 15,
//     alignSelf: 'center',
//     flexDirection: 'row',
//     backgroundColor: 'white',
//   },
//   cimg: {
//     height: 150,
//     width: 150,
//     borderWidth: 1,
//     borderRadius: 25,
//   },
//   productinfo: {
//     color: 'black',
//     fontSize: 25,
//     margin:2,
//   },
//   border:{
//     height:153,
//     width:5,
//   }
});

{
  /* <ImageBackground 
    source={expimages.backgroundimg()}>

</ImageBackground> */
}
