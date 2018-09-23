import React from 'react';
import { TextInput, Button, Alert, Image, Icon, View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { StackNavigator, DrawerItems, SafeAreaView, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import LinearGradient from "react-native-linear-gradient";
import {Container, Content, Header, Footer, Body, Title, Item} from 'native-base';

import CustomHeader from './CustomHeader';

export default class Vent extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Vent',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./companion.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {title: 'Vent',
      description: 'This is the vent page',
      text: ''
  };
}

render() {
  return (
    <Container>
      <CustomHeader title={this.state.title} link= {() => this.props.navigation.openDrawer()} description= {this.state.description} />
        <Content>

        </Content>
        <Footer>
          <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', padding:10, paddingRight:100}}>
            <TextInput
              placeholder="Vent here!"
              style={{height: 40, flex:1, borderColor: 'gray', borderWidth: 1, padding:10}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}></TextInput>
            <Button style={{alignItems: 'Right'}} onPress={() => alert(this.props.description)} title="Send" color="#000" />

          </View>
        </Footer>
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
