import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { scale, moderateScale, verticalScale } from '../scale';

const PreDilation = ({ navigation }) => (
  <View style={styles.container}>

    <View style={styles.topNav}>
      <View style={styles.titleButton}>
        <Text style={styles.titleText}>Pre-dilation</Text>
      </View>
    </View>

    <View style={styles.nextNav}>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('InDilation')}
      >
        <Text style={styles.nextText}>Start dilating</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.mainHolder}>
      <Text>Body</Text>
    </View>

    <View style={styles.footerHolder}>
      <Text>Footer</Text>
    </View>

  </View>
);

const InDilation = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>In Dilation Screen</Text>
    <Button
      onPress={() => navigation.navigate('PostDilation')}
      title="Go to post dilation screen"
    />
  </View>
);

const PostDilation = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Post Dilation Screen</Text>
    <Button
      onPress={() => navigation.navigate('Index')}
      title="Go to main screen"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </View>
);

const Welcome = StackNavigator({
  Home: {
    screen: PreDilation,
  },
  InDilation: {
    screen: InDilation,
  },
  PostDilation: {
    screen: PostDilation,
  }
},{
  navigationOptions: {
    header: null,
    gesturesEnabled: false
  },
});

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    backgroundColor: 'yellow'
  },
  topNav: {
    flex: 0.12,
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
  nextNav: {
    flex: 0.12,
    flexDirection: 'row',
    backgroundColor: '#EF3D40'
  },
  nextButton: {
    paddingLeft: 20,
    backgroundColor: '#EF3D40'
  },
  nextText: {
    fontWeight: 'bold',
    color: '#282A78',
    fontSize: scale(45)
  },
  mainHolder: {
    flex: 0.8,
    backgroundColor: '#FCF1DC'
  },
  footerHolder: {
    flex: 0.15,
    alignItems: 'center', // Center elements horizontally.
    justifyContent: 'center',
    backgroundColor: '#282A78'
  },




  journalButton: {
    flex: .5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EF3D40'
  },
  iconJournal: {
    width: scale(22),
    height: scale(25)
  },
  settingsButton: {
    flex: .5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EF3D40'
  },
  iconSettings: {
    width: scale(25),
    height: scale(25)
  },

  topTextHolder: {
    top: scale(40),
    left: scale(20),
    width: scale(250),
    padding: 20,
    borderWidth: 5,
    borderColor: '#EF3D40',
  },
  bottomTextHolder: {
    top: scale(50),
    left: scale(20),
    width: scale(300)
  },
  topText: {
    fontWeight: '800',
    color: '#EF3D40',
    fontSize: scale(30)
  },
  bottomText: {
    fontWeight: '200',
    color: '#282A78',
    paddingLeft: 20,
    fontSize: scale(35)
  },
  vHolder: {
    position: 'absolute',
    bottom: scale(55),
    right: scale(25)
  },
  vImage: {
    height: scale(182),
    width: scale(140)
  }
});