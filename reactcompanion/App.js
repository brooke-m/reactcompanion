import React from 'react';
import { Button, Alert, Image, Icon, View, Text, StyleSheet } from 'react-native';
import { StackNavigator, DrawerItems, SafeAreaView, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import SignUp from './SignUp';
import Login from './Login';
import Vent from './Vent';
import Settings from './Settings';
import Mood from './Mood';
import Crisis from './Crisis';
import Affirmations from './Affirmations';
import Task from './Task';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./companion.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {


    return {
      // <Header
      //   leftComponent={{ icon: 'menu', color: '#fff' }}
      //   centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      //   rightComponent={{ icon: 'home', color: '#fff' }}
      // />
      headerTitle: <LogoTitle />,
      headerLeft: (
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Info"
          color="#fff"
        />
      ),
      headerRight: (
        <Button onPress={() => Alert.alert("This is the home screen")} title="i" color="#fff" />
      ),
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>

        <Button
          title="Menu"
          onPress={() => this.props.navigation.openDrawer()}
        />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./companion.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyApp = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Affirmations: {
    screen: Affirmations,
  },
  Crisis: {
    screen: Crisis,
  },
  Mood: {
    screen: Mood,
  },
  Task: {
    screen: Task,
  },
  Vent: {
    screen: Vent,
  },
  Settings: {
    screen: Settings,
  },

});

export default class App extends React.Component {
  render() {
    return <MyApp />;
  }
}