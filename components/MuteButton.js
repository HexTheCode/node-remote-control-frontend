import React, { useState } from 'react';
import { StyleSheet, View, Image, Pressable } from 'react-native';
import axios from 'axios';
import muteImg from '../assets/Mute_Icon.svg';
import notMuteImg from '../assets/Speaker_Icon.svg';

const styles = StyleSheet.create({
  container:{
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    borderColor: '#FF34B3',
  },
  image:{
    width: 45,
    height: 45,
    tintColor: '#FF34B3',
  }
});

const MuteButton = ({ muted, saveMuted, saveConsultar }) => {


  const [img, saveImg] = useState(notMuteImg);

  const handleChange = async () => {
    saveMuted(!muted);
    saveConsultar(true);
    if(muted){
      saveImg(notMuteImg);
      await axios({
        method: 'post',
        url: 'http://192.168.1.105:8080/mute',
        data: {
          mute: 'false'
        }
      })
  
    }else{
      saveImg(muteImg);
      await axios({
        method: 'post',
        url: 'http://192.168.1.105:8080/mute',
        data: {
          mute: 'true'
        }
      })
  
    }
  }

  return ( 
    <Pressable onPress={handleChange}>
      <View style={styles.container}>
        <Image style={styles.image} source={img} />
      </View>
    </Pressable>
  );
}
 
export default MuteButton;