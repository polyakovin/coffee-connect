import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Left, Body, Right, Title, Content, Form, Item, Label, Input, Button } from 'native-base';

export default class App extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Coffee Connect</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View>
            <Image source={require('./assets/logo.png')}/>
          </View>
          <Form>
            <Item fixedLabel>
              <Label>Имя</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button full>
              <Text style={styles.button}>Регистрация в Coffee Connect</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    // textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'flex-start',
  // },
});
