import React from 'react';
import { useNavigation } from '@react-navigation/native';


import { Container, InputContainer, ButtonContainer } from './styles';
import { ImageBackground, } from '../Login/styles';
import { MaterialCommunityIcons, AntDesign  } from '@expo/vector-icons';

import CustomButton from '../../Components/Button';
import theme from '../../theme';
import Avatar from '../../pages/Avatar';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconInput from '../../Components/IconInput'


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
            <IconInput 
                icon={AntDesign}
                iconName="user"
                placeholder="Nome Completo"
                />
            <IconInput 
                icon={MaterialCommunityIcons}
                iconName="email-outline"
                placeholder='Email'
                />
            <IconInput 
              icon={AntDesign}
              iconName="lock1"
              placeholder="Senha"
              />
            <IconInput 
              icon={AntDesign}
              iconName="lock1"
              placeholder="Repetir Senha"
              />
          </InputContainer>
          
          <ButtonContainer>
            <CustomButton text='Proximo' background={theme.palette.secondary.main} textColor='#fafafa' onPress={() => NavigateAvatar(Avatar)}/>
          </ButtonContainer>
        </SafeAreaView>
      </ImageBackground> 
  </Container>
);
}

export default Register;