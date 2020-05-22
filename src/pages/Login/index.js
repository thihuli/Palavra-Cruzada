import React from "react";
import { SafeAreaView, TouchableOpacity, } from "react-native";
import { MaterialCommunityIcons, AntDesign  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import Background from "../../assets/BackAlt5.jpeg";
import { Container, ImageBackground, Text, ButtonAling, ContainerInput, LogoContainer } from "./styles";

import Input from '../../Components/ViewInput';
import Logo from '../../Components/Logo';
import CustomButton from '../../Components/Button';
import theme from "../../theme";
import Register from '../Register';




export default function Login() {
  const navigation = useNavigation();

  function NavigateRegister(Register) {
    navigation.navigate('Register', { Register })
  }

  return (
    <Container>
      <ImageBackground >
				<SafeAreaView style={{flex: 1}}>

          <LogoContainer>
            <Logo/>
          </LogoContainer>

          <ContainerInput>
            <MaterialCommunityIcons name="email-outline" size={24} color="#f5f5f5" />
            <Input placeholder={'Email'} textContentType={'emailAddress'}></Input>
            <AntDesign name="lock1" size={24} color="#f5f5f5" />
            <Input placeholder={'Senha'} secureTextEntry={true} ></Input>
            <TouchableOpacity onPress={() => alert('Senha')}><Text>Esqueceu sua Senha?</Text></TouchableOpacity>
          </ContainerInput>

          
          

          <ButtonAling>        
            <CustomButton text='Entrar' background={theme.palette.primary.main} textcolor='#fafafa'  onPress={() => alert('Entrou')}  />  
            <CustomButton text='Cadastre-se' background={theme.palette.primary.main } textcolor='#fafafa' onPress={() => NavigateRegister(Register)} />
            
            <CustomButton //usando icon da font FontAwesome em vector icons
              colorIcon='#FFFFFF'
              text='Entrar usando o Facebook' 
              background={theme.palette.primary.dark} 
              textcolor='#fafafa' 
              onPress={() => alert('Facebook')} 
              nameIcon="facebook-official"
              sizeIcon={35}
              />

              <CustomButton //usando icon da font FontAwesome em vector icons
              colorIcon='#FFFFFF'
              text='Entrar usando o Google' 
              background={theme.palette.secondary.main} 
              textcolor='#fafafa' 
              onPress={() => alert('Google')} 
              nameIcon="google-plus-circle"
              sizeIcon={35}
              />
          </ButtonAling>
          

        </SafeAreaView>
			</ImageBackground>
    </Container>
  );
}