import React from 'react';
import { Button, Alert, Image, Icon, View, Text, StyleSheet, Platform, StatusBar, FlatList } from 'react-native';
import { StackNavigator, DrawerItems, SafeAreaView, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import {Container, Content, Header, Body, Title, Card, CardItem } from 'native-base';
import LinearGradient from "react-native-linear-gradient";
import CustomHeader from './CustomHeader';

const list = [
  {
    name: 'task one',
    subtitle: 'subtitle one'
  },
  {
    name: 'task two',
    subtitle: 'subtitle two'
  },
];

export default class Task extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Task',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./companion.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {title: 'Task',
    description: 'This is the task page',
    tasks: [
      {
        name: 'shower',
        description: 'take some time to look after yourself',
      },
      {
        name: 'medication',
        description: 'consistency is key! you can do it!',
      },
      {
        name: 'drink water',
        description: 'hydration makes everything easier :)',
      },
    ],
  };
}

render() {
  return (
    <Container>
      <CustomHeader title={this.state.title} link= {() => this.props.navigation.openDrawer()} description= {this.state.description} />
        <Content>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Card>
            <CardItem>
                <Text>task one</Text>
            </CardItem>
        </Card>
        <Card>
            <CardItem>
                <Text>task two</Text>
            </CardItem>
        </Card>
        <Card>
            <CardItem>
                <Text>task three</Text>
            </CardItem>
        </Card>
        <Card>
            <CardItem>
                <Text>task four</Text>
            </CardItem>
        </Card>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Go back home"
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
      </Container>
    );

  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  taskText: {
    fontSize: 18,
    color: '#000'
  }
});
