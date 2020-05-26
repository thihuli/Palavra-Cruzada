import React from 'react';
import { SafeAreaView } from 'react-native';

import { Container, Body, Foother, Header, ImageActionBody, TouchableAction, ImageActionFooter, HeaderDivision, ImageActionHeader } from './styles';
import playAlone from '../../assets/gameScreen/playalone.png';
import playPVP from '../../assets/gameScreen/playPVP.png';
import rank from '../../assets/gameScreen/Rank.png';
import modos from '../../assets/gameScreen/Modos.png';
import shop from '../../assets/gameScreen/Shop.png';

import desafios from '../../assets/gameScreen/Desafios.png';
import durons from '../../assets/gameScreen/Durons.png';
import levelStatus from '../../assets/gameScreen/LevelStatust.png';
import userInfo from '../../assets/gameScreen/UserInfo.png';
import coins from '../../assets/gameScreen/CoinsGame.png';

const GameScreenOptions = () => {

  return (
    <Container>
      <SafeAreaView style={{flex: 1,}}>
        <Header>
          <HeaderDivision>
            <TouchableAction onPress={() => {} } >
              <ImageActionHeader  source={levelStatus}  />
            </TouchableAction>
            <TouchableAction onPress={() => {} } >
              <ImageActionHeader  source={durons}  />
            </TouchableAction>
            <TouchableAction onPress={() => {} } >
              <ImageActionHeader  source={coins}  />
            </TouchableAction>
          </HeaderDivision>            

          <HeaderDivision>
            <TouchableAction onPress={() => {} } >
              <ImageActionHeader  source={userInfo}  />
            </TouchableAction>
            <TouchableAction onPress={() => {} } >
              <ImageActionHeader  source={desafios}  />
            </TouchableAction>

            
          </HeaderDivision>
        </Header>

        <Body>

          <TouchableAction onPress={() => {} } >
            <ImageActionBody source={playAlone}/>  
          </TouchableAction>


          <TouchableAction onPress={() => {}} >
            <ImageActionBody source={playPVP}/>
          </TouchableAction>


        </Body>
        
        <Foother>
          <TouchableAction onPress={() => {}} >
            <ImageActionFooter source={shop}/>
          </TouchableAction>
          <TouchableAction onPress={() => {}} >
            <ImageActionFooter source={modos}/>
          </TouchableAction>
          <TouchableAction onPress={() => {}} >
            <ImageActionFooter source={rank}/>
          </TouchableAction>
        </Foother>
        
      </SafeAreaView>
    </Container>
    );
}

export default GameScreenOptions;