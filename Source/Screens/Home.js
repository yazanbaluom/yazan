import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import React, { useContext } from 'react';
import Product from '../Components/Product';
import {users} from '../Resources/Data';
import expimages from '../assets/images/expimages';
import ScreenNames from '../../Routes/ScreenNames';
import {useNavigation} from '@react-navigation/native';
import AppContext from '../../Store/AppContext';
// import Card from './Source/Components (جزء من الشاشه)/Card'

const Home = () => {
  const {Cart,Setcart}= useContext(AppContext);
  const navigation = useNavigation();
  const rendercards = () => {
    const cards = users.map((product, index) => {
      return (
        <Product
          key={index}
          name={product.name}
          price={product.price}
          img={product.img}
        />
      );
    });
    return cards;
  };
  return (
    <ImageBackground source={expimages.backgroundimg()} style={styles.product}>
      <View style={styles.screen}>
      <View style={styles.cartView}>
        <Pressable 
        style={styles.cartView}
          onPress={() => {
            navigation.navigate(ScreenNames.cart);
          }}>
          <Image style={styles.Cart} source={expimages.cart()} />
          <Text style ={styles.Text}>cart {Cart.length}</Text>
        </Pressable>
      </View>

      <ScrollView>{rendercards()}</ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:'rgba(0, 0, 0, 0.15)'
  },
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    // alignItems: 'center',
    padding: 5,
  },
  Cart: {
    width:50,
    height: 50,
    // marginLeft: 140,
    // backgroundColor:'black'
    // borderwidth: 1,
  },
  Cartimg: {},
  product: {
    flex: 1,
  },
  Text:{
    fontSize:25,
    color:'black',
    backgroundColor:'#fff'
  },
  cartView:{
    height:100,
    width:'100%',
    alignItems:'flex-end',
    paddingRight:10,
  }
});