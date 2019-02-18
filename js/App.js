import React from 'react';
import { ScreenOrientation } from 'expo';

ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);

import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { SafeAreaView, StackNavigator } from 'react-navigation';

import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import WelcomeScreen from './screens/Welcome';

import { scale, moderateScale, verticalScale } from './scale';

const Routes = {
  Dilation: {
    name: 'Home',
    screen: HomeScreen,
  },
  Settings: {
    name: 'Settings',
    screen: SettingsScreen,
  },
  Dilation: {
    name: 'Welcome',
    screen: WelcomeScreen,
  },
};

const MainScreen = ({ navigation }) => (
  <View style={styles.container}>
{/* 
    <View style={styles.topNav}>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => {
          const { path, params, screen } = Routes['Dilation'];
          const { router } = screen;
          const action = path && router.getActionForPathAndParams(path, params);
          navigation.navigate('Dilation', {}, action);
        }}
      >
        <Text style={styles.startText}>Start</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.journalButton}
        onPress={() => {
          const { path, params, screen } = Routes['Journal'];
          const { router } = screen;
          const action = path && router.getActionForPathAndParams(path, params);
          navigation.navigate('Journal', {}, action);
        }}
      >
        <Image
          style={styles.iconJournal}
          source={require('../assets/img/journal_icon.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => {
          const { path, params, screen } = Routes['Settings'];
          const { router } = screen;
          const action = path && router.getActionForPathAndParams(path, params);
          navigation.navigate('Settings', {}, action);
        }}
      >
        <Image
          style={styles.iconSettings}
          source={require('../assets/img/settings_icon.png')}
        />
      </TouchableOpacity>
    </View> */}

    <View style={styles.mainHolder}>
      <View style={styles.topTextHolder}>
        <Text style={styles.topText}>Hello!{"\n"}Take a deep{"\n"}breath.{"\n"}Let’s begin.</Text>
      </View>
      <View style={styles.bottomTextHolder}>
        <Text style={styles.bottomText}>Dilating is{"\n"}about{"\n"}helping{"\n"}shape{"\n"}your{"\n"}body.</Text>
      </View>
      <View style={styles.vHolder}>
        <Image
          style={styles.vImage}
          source={require('../assets/img/vagina.png')}
        />
      </View>
    </View>

  </View>
);

const AppNavigator = StackNavigator(
  {
    ...Routes,
    Index: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    },
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default () => <AppNavigator />;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    backgroundColor: 'yellow'
  },
  topNav: {
    flex: .5,
    paddingTop: 20,
    flexDirection: 'row',
    backgroundColor: '#EF3D40'
  },
  startButton: {
    flex: 1.5,
    paddingLeft: 20,
    paddingTop: scale(-4),
    backgroundColor: '#FCF1DC'
  },
  startText: {
    fontWeight: 'bold',
    color: '#EF3D40',
    fontSize: scale(57)
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
  mainHolder: {
    flex: 4,
    backgroundColor: '#CEEAE1'
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