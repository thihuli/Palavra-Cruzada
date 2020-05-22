import React from 'react';
import { useNavigation } from '@react-navigation/native';


import { Container, InputContainer, ButtonContainer } from './styles';
import ViewInput from '../../Components/ViewInput'
import { ImageBackground, } from '../Login/styles';

import Background from "../../assets/BackAlt5.jpeg";
import CustomButton from '../../Components/Button';
import theme from '../../theme';
import Avatar from '../../pages/Avatar'
import { SafeAreaView } from 'react-native-safe-area-context';


const Register = () => {
  const navigation = useNavigation();

  function NavigateAvatar(Avatar) {
    navigation.navigate('Avatar', { Avatar })
  }

return (  
  
  <Container>
      <ImageBackground >
        <SafeAreaView style={{flex: 1}}>
          <InputContainer>
            <ViewInput placeholder={'Nome Completo'} />
            <ViewInput placeholder={'Email'} />
            <ViewInput placeholder={'Senha'} />
            <ViewInput placeholder={'Repetir Senha'} />
          </InputContainer>
          
          <ButtonContainer>
            <CustomButton text='Proximo' background={ theme.palette.primary.main } textcolor='#fafafa' onPress={() => NavigateAvatar(Avatar)}/>
          </ButtonContainer>



        </SafeAreaView>
      </ImageBackground> 
  </Container>
);
}

export default Register;