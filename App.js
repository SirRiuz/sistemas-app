

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text,View } from 'react-native';
import Analytics from './components/Analytics';
import Stats from './components/Stats';
import styles from './style/App';
import { useFonts } from 'expo-font'
import IconSvg from './assets/svg/Icon';


export default function App() {
  const [fontsLoaded] = useFonts({
    'UberMove-Bold': require('./assets/UberMove-Bold.ttf'),
    'UberMove-Medium': require('./assets/UberMove-Medium.ttf'),
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <IconSvg/>
        </View>
        <Text
          style={{
            ...styles.title,
            fontFamily:'UberMove-Bold'
          }}
        >
          My workspace
        </Text>
      
        <Text
          style={{
            ...styles.subtitle,
            fontFamily:'UberMove-Medium',
          }}
        >
          25°C
        </Text>
      </View>
      <View style={styles.analytics}>
        <Analytics/>
      </View>
      <View style={styles.statsContainer}>
        <Stats/>
      </View>
    </View>
  );
}


