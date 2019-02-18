import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { scale, moderateScale, verticalScale } from '../scale';

const Settings = ({ navigation }) => (
  <View style={styles.container}>

    <View style={styles.topNav}>
      <View style={styles.titleButton}>
        <Text style={styles.titleText}>Settings</Text>
      </View>
    </View>

    <View style={styles.backNav}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Index')}
      >
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.mainHolder}>
      <Text>Body</Text>
    </View>

  </View>
);

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  topNav: {
    flex: 0.1,
    paddingTop: 20,
    flexDirection: 'row',
    backgroundColor: '#282A78'
  },
  titleButton: {
    flex: 1.5,
    paddingLeft: 20,
    paddingTop: scale(-4),
    backgroundColor: '#282A78'
  },
  titleText: {
    fontWeight: 'bold',
    color: '#EF3D40',
    fontSize: scale(45)
  },
  backNav: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: '#FCF1DC'
  },
  backButton: {
    paddingLeft: 20,
    backgroundColor: '#FCF1DC'
  },
  backText: {
    fontWeight: 'bold',
    color: '#282A78',
    fontSize: scale(45)
  },
  mainHolder: {
    flex: 0.8,
    backgroundColor: '#282A78'
  }
});
