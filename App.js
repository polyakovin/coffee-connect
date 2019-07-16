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
            <Item fixedLabel>
              <Label>Пол</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Возраст</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Образование</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Специальность</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Сфера деятельности</Label>
              {/* (выбрать: архитектура, бизнес, маркетинг, искусство, образование, финансы, право, дизайн, HR, продажи, наука, IT, медицина, другое)  */}
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Coffee-intro</Label>
              {/* что я люблю, что мне интересно, о чем я хочу поговорить, узнать */}
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>E-mail</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Пароль</Label>
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



// Функционал
// Поиск людей по следующим критериям:
// 	•	М/Ж
// 	•	Гео
// 	•	Сфера деятельности (можно выбрать любая)
// Две кнопки: COFFEE и CONNECT (по аналогии с лайками в Тиндер)
// COFFEE - пригласить на кофе
// CONNECT – принять приглашение
// Когда произошел Connect, то можно предложить день и время. Другой может принять или предложить другой день/время.
// Выбор места: выбрать место на карте (гео-метка) или выбрать конкретное кафе из карты/списка.
// Если встреча назначена, то приложение должно посылать push-уведомления с напоминалкой.


// Искать кандидатов на кофе можно в ручную. Отдельно можно сделать раздел Caffeinate me (Кофе сейчас), где будут висеть профили тех, кто хочет пойти на кофе прямо сейчас.
// Раздел Random connect/Secret connect – случайное совпадение кандидатов.

