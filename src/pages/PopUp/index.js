import React, { useState } from 'react';
import { Modal, Text, Image, TouchableOpacity } from 'react-native';

import { PopUp, PopUpInner, ViewPopUp } from './styles';

import desafiosDiarios from '../../assets/popup/DesafiosDiarios.png';
import checkList from '../../assets/popup/checklist1.png';
import present from '../../assets/popup/birthday-and-party.png';

const PopUpModal = ({visible, setVisible}) => {
  
  return (
    <Modal transparent={true} visible={visible} animationType='slide'>
      <PopUp>
        <PopUpInner>
          <Image source={desafiosDiarios} style={{marginBottom: 6}} />

          <ViewPopUp >            
            <Image source={checkList} style={{width: 23, height: 23, margin: 4}} />
            <Text style={{color: '#fff', marginLeft: 5}} >Partida PVP</Text>
            
          </ViewPopUp>

          <ViewPopUp></ViewPopUp>
          <ViewPopUp></ViewPopUp>

          <TouchableOpacity onPress={() => {
            setVisible(!visible);
              }} >
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}} >
              Fechar
            </Text>
          </TouchableOpacity>
        </PopUpInner>            
      </PopUp>
    </Modal>

  );
}

export default PopUpModal;