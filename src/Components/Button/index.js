import React from 'react';
import { ButtonContainer, ButtonText} from './styles';
import { FontAwesome } from '@expo/vector-icons';

const CustomButton = (props) => {
  const {
    onPress,
    icon,
    background,
    iconSize,
    iconColor,
    textColor,
    text
  }  = props;

  return (
      <ButtonContainer 
        onPress={onPress}
        background={background}
        icon={icon}>
        <FontAwesome name={icon} size={iconSize} color={iconColor} />
        <ButtonText textColor={textColor}>{text}</ButtonText>
      </ButtonContainer> 
  );
}

export default CustomButton;