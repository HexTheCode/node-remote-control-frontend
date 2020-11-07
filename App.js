import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View  } from 'react-native';
import ControlLoud from './components/ControlLoud';
import ControlBright from './components/ControlBright';
import MuteButton from './components/MuteButton';

export default function App() {


  const [volume, saveVolume] = useState();
  const [muted, saveMuted] = useState();
  const [consultar, saveConsultar] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const volume = await axios.get('http://192.168.1.105:8080/volume');
      const isMuted = await axios.get('http://192.168.1.105:8080/mute');
      saveMuted(isMuted.data.muted);
      saveVolume(volume.data.volume);
      saveConsultar(false);
    }
    fetchData()
  }, [consultar])


  return (
    <View style={styles.container}>
        <View style={styles.controlBox}>
          <View style={styles.leftBox}>
          <ControlLoud volume={volume} saveVolume={saveVolume} saveConsultar={saveConsultar}/>
          </View>
          <View style={styles.centerBox}>
          <MuteButton muted={muted} saveMuted={saveMuted} saveConsultar={saveConsultar}/>
          </View>
          <View style={styles.rightBox}>
            <ControlBright/>
          </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#201148',
  },

  controlBox:{
    position: 'absolute',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
    bottom: 40,
  },
  leftBox:{
    flex: 1,
    alignItems: 'flex-start',

  },
  rightBox:{
    flex: 1,
    alignItems: 'flex-end',

  },
  centerBox:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
