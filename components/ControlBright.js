import React from 'react';
import { StyleSheet, View, Pressable, Image } from 'react-native';
import highBright from '../assets/sun.svg';
import lowBright from '../assets/moon.svg';


const scale = 1.5;

const styles = StyleSheet.create({
  textButtonPlus: {
    position: 'absolute',
    top: 15,
    left: 14*scale,
    textAlign: 'center',
  },
  textButtonLess: {
    position: 'absolute',
    bottom: 23,
    left: 20*scale,
    textAlign: 'center',
  },
  button:{
    borderWidth: 2,
    borderRadius: 36*scale,
    width: 70*scale,
    height: 220*scale,
    borderColor: '#FF34B3',
    justifyContent: 'center',
  },
  image:{
    width: 60,
    height: 60,
    tintColor: '#FF34B3', 
  },
  image2:{
    width: 45,
    height: 45,
    tintColor: '#FF34B3', 
    borderWidth: 1,
  }
});

const ControlBright = () => {

  const highBrightPress = () => console.log('Plus Bright Pressed!');
  const lowBrightPress = () => console.log('Less Bright Pressed!'); 

  return ( 
    <View style={styles.button} >
      <Pressable style={styles.textButtonPlus} onPress={highBrightPress}>
        <Image style={styles.image} source={highBright} />
      </Pressable>
      <Pressable style={styles.textButtonLess} onPress={lowBrightPress}>
        <Image style={styles.image2} source={lowBright} />
      </Pressable>
    </View> 
  );
}
 
export default ControlBright;