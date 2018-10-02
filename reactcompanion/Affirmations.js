import React from 'react';
import { Button, Alert, Image, Icon, View, Text, StyleSheet, Platform, StatusBar, ImageBackground } from 'react-native';
import { StackNavigator, DrawerItems, SafeAreaView, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import LinearGradient from "react-native-linear-gradient";
import {Container, Content, Header, Body, Title} from 'native-base';

import CustomHeader from './CustomHeader';

export default class Affirmations extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Affirmations',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./companion.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {title: 'Affirmations',
    description: 'This is the affirmations page',
    image: require ('./aff_background.jpg'),
    affirmation: "Self-care is how you take your power back.",
    affirmations: ["Self-care is how you take your power back.",
      "Every day and in every way I am getting better and better",
      "I know you're tired. I know you're physically and emotionally drained, but you have to keep going.",
      "My feelings are valid.",
      "Your mental health is a priority. Your happiness is an essential. Your self-care is a necessity.",
      "Recovery is not one and done. It is a lifelong journey that takes place one day, one step at a time.",
      "You deserve to heal.",
      "Happiness comes in waves, it'll find you again",
      "You aren’t the things that haunt you. You aren’t the pain you feel.",
      "You are enough. You have enough. You do enough.",
      "It is not overreacting to ask for what you want and need.",
      "You are strong for surviving.",
      "Mental illness is not a personal failure."
    ]
  };
}
randomAffirmation() {
  this.setState({affirmation: this.state.affirmations[(Math.floor(Math.random() * 13))]});
}
render() {
  return (
    <Container>
      <CustomHeader title={this.state.title} link= {() => this.props.navigation.openDrawer()} description= {this.state.description} />
      <ImageBackground
        source={this.state.image}
        style={{width: '100%', height: '100%'}}
        >
          <Content>
          <View style={{ flex: 1, paddingTop: 200, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{this.state.affirmation}</Text>
            <Button
              onPress={() => this.randomAffirmation()}
              title="Change affirmation"
            />
            <Button
              title="Home"
              onPress={() => this.props.navigation.navigate('Home')}
            />
            <Button
              title="Menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </View>
          </Content>
        </ImageBackground>
      </Container>
    );

  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
