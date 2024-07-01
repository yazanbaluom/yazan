import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ScreenNames from './ScreenNames'
import Home from '../Source/Screens/Home'
import Splash from '../Source/Screens/Splash'
import Cart from '../Source/Screens/Cart'
import Orderinfo from '../Source/Screens/Orderinfo'
import State from '../Source/Screens/State'


const MainNavigation = () => {

    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name={"test"} component={State} options={{headerShown:false}}/> */}
                <Stack.Screen name={ScreenNames.splash} component={Splash} options={{headerShown:false}}/>
                <Stack.Screen name={ScreenNames.home} component={Home} />
                <Stack.Screen name={ScreenNames.cart} component={Cart} />
                <Stack.Screen name={ScreenNames.Orderinfo} component={Orderinfo} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})