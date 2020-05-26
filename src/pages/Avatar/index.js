import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, TitleText, AvatarContainer, ButtonContainer, ImageContainer } from './styles';
import CustomButton from '../../Components/Button';
import theme from '../../theme';
import GameScreenOptions from '../GameScreenOptions';
import { SafeAreaView } from 'react-native-safe-area-context';

const Avatar = () => {
  
  const navigation = useNavigation();

  function NavigateGame(GameScreenOptions) {
    navigation.navigate('GameScreenOptions', { GameScreenOptions })
  };


  return( 
    <Container>
        <SafeAreaView style={{flex: 1}}>
        
        <TitleText>Selecione o seu Avatar</TitleText>


        <AvatarContainer>
          
        </AvatarContainer>
        
        <ButtonContainer>
          <CustomButton text='Entrar' background={theme.palette.secondary.main} textColor='#fafafa'  onPress={() => NavigateGame(GameScreenOptions)}  />
        </ButtonContainer>
        
        </SafeAreaView>
    </Container>
  );
}

export default Avatar;

/* const avatrs = [
    '../../assets/Avatares/001-woman-11 1.png',
    '../../assets/Avatares/002-woman-10 1.png',
    '../../assets/Avatares/006-woman-6 1.png',
    '../../assets/Avatares/008-woman-4 1.png',
    '../../assets/Avatares/011-woman-1 1.png',
    '../../assets/Avatares/013-man-10 1.png',
    '../../assets/Avatares/014-hipster-3 1.png',
    '../../assets/Avatares/015-hipster-2 1.png',
    '../../assets/Avatares/017-hipster 1.png',
    '../../assets/Avatares/019-man-8 1.png',
    '../../assets/Avatares/023-man-4 1.png',
    '../../assets/Avatares/024-man-3 1.png',
    '../../assets/Avatares/025-man-2 1.png',
    '../../assets/Avatares/033-boy-2 1.png',
    '../../assets/Avatares/034-boy-1 1.png',
    '../../assets/Avatares/man 1.png',
  ]; */

  /* function makeAvatrs({item}) {
    return (
      <TouchableOpacity onPress={() => {}}>
        <Image source={item}></Image>
      </TouchableOpacity>
  )} */