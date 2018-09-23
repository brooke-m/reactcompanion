import React from 'react';
import { Button, Alert, Image, Icon, View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { StackNavigator, DrawerItems, SafeAreaView, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import LinearGradient from "react-native-linear-gradient";
import {Container, Content, Header, Body, Title} from 'native-base';

import SignUp from './SignUp';
import Login from './Login';
import Vent from './Vent';
import Settings from './Settings';
import Mood from './Mood';
import Crisis from './Crisis';
import Affirmations from './Affirmations';
import Task from './Task';

import CustomHeader from './CustomHeader';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Companion Home`,
     headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    });
  constructor(props) {
    super(props);
    this.state = {
      title: 'Home',
      description: 'This is the home page'
    };
  }

  render() {
    return (
      <Container>
        <CustomHeader title={this.state.title} link= {() => this.props.navigation.openDrawer()} description= {this.state.description} />
        <Content>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>

            <Button title="Menu" onPress={() => this.props.navigation.openDrawer()} />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: this.width,
    backgroundColor: '#fff',
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