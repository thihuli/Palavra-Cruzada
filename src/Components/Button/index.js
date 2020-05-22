import React from 'react';
import { ButtonContainer, ButtonText, Icon} from './styles';
import { FontAwesome } from '@expo/vector-icons';

const CustomButton = (props) => {
  const {onPress}  = props

  return (
      <ButtonContainer 
        onPress={onPress}
        background={props.background}>
        <Icon>
          <FontAwesome name={props.nameIcon} size={props.sizeIcon} color={props.colorIcon} />
        </Icon>
        <ButtonText  textcolor={props.textcolor}>{props.text}</ButtonText>
      </ButtonContainer> 
  );
}

export default CustomButton;