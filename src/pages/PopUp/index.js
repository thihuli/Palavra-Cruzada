import React, { useState } from 'react';
import { Modal, Text, Image, TouchableOpacity } from 'react-native';

import { 
  PopUp, 
  PopUpInner, 
  ViewPopUp, 
  ImageInnerPoup, 
  TextInnerPopup, 
  ViewInnerPopUp, 
  ButtonPopUp, 
  TextInner, 
  ImageButton } from './styles';

import desafiosDiarios from '../../assets/popup/DesafiosDiarios.png';
import checkList from '../../assets/popup/checklist1.png';
import present from '../../assets/popup/birthday-and-party.png';
import medal from '../../assets/popup/medal.png';
import coin from '../../assets/popup/coins.png'

const PopUpModal = ({visible, setVisible}) => {
  
  return (
    <Modal transparent={true} visible={visible} animationType='slide'>
      <PopUp>
        <PopUpInner>
          <Image source={desafiosDiarios} style={{marginBottom: 6}} />

          <ViewPopUp>            
            <ImageInnerPoup source={checkList}/>
            <TextInnerPopup>
              Partida PVP
            </TextInnerPopup>
            <ViewInnerPopUp>
              <TextInner>Vença 5 partidas PVP</TextInner>
            </ViewInnerPopUp>
            <ButtonPopUp onPress={() => alert('Um presente para vocẽ!') } >
              <ImageButton source={present} />
            </ButtonPopUp>
          </ViewPopUp>
          <ViewPopUp>            
            <ImageInnerPoup source={checkList}/>
            <TextInnerPopup>
              Partidas Solo
            </TextInnerPopup>
            <ViewInnerPopUp>
              <TextInner>Vença 5 partidas PVP</TextInner>
            </ViewInnerPopUp>
            <ButtonPopUp onPress={() => alert('Um presente para vocẽ!') } >
              <ImageButton source={medal} />
            </ButtonPopUp>
          </ViewPopUp>
          <ViewPopUp>            
            <ImageInnerPoup source={checkList}/>
            <TextInnerPopup>
              Modos Aleatórios
            </TextInnerPopup>
            <ViewInnerPopUp>
              <TextInner>Vença 5 partidas PVP</TextInner>
            </ViewInnerPopUp>
            <ButtonPopUp onPress={() => alert('Um presente para vocẽ!') } >
              <ImageButton source={coin} />
            </ButtonPopUp>
          </ViewPopUp>
          

          <TouchableOpacity onPress={() => {
            setVisible(!visible);
              }} >
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18, marginBottom: 5}} >
              Fechar
            </Text>
          </TouchableOpacity>
        </PopUpInner>            
      </PopUp>
    </Modal>

  );
}

export default PopUpModal;