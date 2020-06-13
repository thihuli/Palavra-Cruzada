import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { 
  Container, 
  TouchBack } from './styles';

const ButtonBack = ({onPress}) => {
  return( 
    <Container>
      <TouchBack onPress={onPress} >
        <MaterialIcons name="arrow-back" size={28} color="#fff" />

      </TouchBack>

    </Container>
    );
}

export default ButtonBack