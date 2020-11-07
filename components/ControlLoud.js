import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text } from 'react-native';

const scale = 1.5;

const styles = StyleSheet.create({
  textButtonPlus: {
    color: '#FF34B3',
    position: 'relative',
    fontSize: 40*scale,
    top: 10,
    textAlign: 'center',
  },
  textButtonLess: {
    color: '#FF34B3',
    position: 'absolute',
    fontSize: 60*scale,
    bottom: 1,
    left: 27*scale,
    textAlign: 'center',
  },
  button:{
    borderWidth: 2,
    borderRadius: 36*scale,
    width: 70*scale,
    height: 220*scale,
    borderColor: '#FF34B3',
  }
});

const ControlLoud = ({ volume, saveVolume, saveConsultar }) => {

  const plusLoudPress = async () => {
    saveConsultar(true);
    await axios({
      method: 'post',
      url: 'http://192.168.1.105:8080/volume',
      data: {
        p: 1
      }
    })

    saveVolume(volume + 1);

  };
  const lessLoudPress = async () => {
    saveConsultar(true);
    await axios({
      method: 'post',
      url: 'http://192.168.1.105:8080/volume',
      data: {
        p: -1
      }
    })

    saveVolume(volume - 1);

  };; 

  return ( 
    <View style={styles.button} >
      <Text style={styles.textButtonPlus} onPress={plusLoudPress}>+</Text>
      <Text style={styles.textButtonLess} onPress={lessLoudPress}>-</Text>
    </View> 
  );
}
 
export default ControlLoud;