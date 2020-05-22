import React from 'react';
import { SafeAreaView, Image } from 'react-native';


import { Container, Body, Foother, Header } from './styles';
import BodyGame from '../../assets/gameScreen/BodyGame.png'

const GameScreen = () => {

  return (
    <Container>
      <SafeAreaView style={{flex: 1,}}>
        <Header>
          
        </Header>

        <Body>
          <Image source={BodyGame} style={{width: 392, height: 450, alignSelf: "center", position: "absolute", top: 120}}/>
        </Body>
        
        <Foother>

        </Foother>
        
      </SafeAreaView>
    </Container>
    );
}

export default GameScreen;