import React, { useState } from 'react';

import PopUpModal from '../../pages/PopUp'

import { 
  Container, 
  Body, 
  Footer, 
  Header, 
  ImageActionBody, 
  TouchableAction, 
  ImageActionFooter, 
  HeaderDivision, 
  ImageActionHeader,
  TouchableActionHeader } from './styles';

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
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Container>

      <PopUpModal visible={modalVisible} setVisible={setModalVisible} />

        

        <Header>
          <HeaderDivision>
            <TouchableActionHeader onPress={() => {} } >
              <ImageActionHeader  source={levelStatus} />
            </TouchableActionHeader>
            <TouchableActionHeader onPress={() => {} } >
              <ImageActionHeader  source={durons}  />
            </TouchableActionHeader>
            <TouchableActionHeader onPress={() => {} } >
              <ImageActionHeader  source={coins}  />
            </TouchableActionHeader>
          </HeaderDivision>            

          <HeaderDivision>
            <TouchableActionHeader onPress={() => {} } >
              <ImageActionHeader  source={userInfo}  />
            </TouchableActionHeader>
            <TouchableActionHeader onPress={() => setModalVisible(true) } >
              <ImageActionHeader  source={desafios}  />
            </TouchableActionHeader>

            
          </HeaderDivision>
        </Header>

        <Body>
          <TouchableAction onPress={() => {} } >
            <ImageActionBody source={playAlone}  />  
          </TouchableAction>
          <TouchableAction onPress={() => {}} >
            <ImageActionBody source={playPVP} />
          </TouchableAction>
        </Body>
        
        <Footer>
          <TouchableAction onPress={() => {}} >
            <ImageActionFooter source={shop}/>
          </TouchableAction>
          <TouchableAction onPress={() => {}} >
            <ImageActionFooter source={modos}/>
          </TouchableAction>
          <TouchableAction onPress={() => {}} >
            <ImageActionFooter source={rank}/>
          </TouchableAction>
        </Footer>
        
    </Container>
    );
}

export default GameScreenOptions;