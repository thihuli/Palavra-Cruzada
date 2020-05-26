import React  from "react";
import { SafeAreaView, TouchableOpacity, } from "react-native";
import { MaterialCommunityIcons, AntDesign  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from "styled-components/native";

import { Container, ImageBackground, Text, ButtonAling, ContainerInput, LogoContainer } from "./styles";

import Logo from '../../Components/Logo';
import CustomButton from '../../Components/Button';
import Register from '../Register';
import IconInput from "../../Components/IconInput";

function Login() {
  const navigation = useNavigation();
  const theme = useTheme();

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
            <IconInput 
              icon={MaterialCommunityIcons}
              iconName="email-outline"
              placeholder={"E-mail"}
              />
          </ContainerInput>
          <ContainerInput>
            <IconInput 
              icon={AntDesign}
              iconName="lock1"
              placeholder={"Senha"}
              />
          </ContainerInput>
          <ContainerInput>
          <TouchableOpacity onPress={() => alert('Senha')}><Text>Esqueceu sua Senha?</Text></TouchableOpacity>
          </ContainerInput>

          <ButtonAling>        
            <CustomButton text='Entrar' background={theme.palette.secondary.main} textColor='#fafafa'  onPress={() => alert('Entrou')}  />  
            <CustomButton text='Cadastre-se' background={theme.palette.secondary.main } textColor='#fafafa' onPress={() => NavigateRegister(Register)} />
            
            <CustomButton //usando icon da font FontAwesome em vector icons
              iconColor='#FFFFFF'
              text='Entrar usando o Facebook' 
              background="#4267B2" 
              textColor='#fafafa' 
              onPress={() => alert('Facebook')} 
              icon="facebook-official"
              iconSize={35}
              />

              <CustomButton //usando icon da font FontAwesome em vector icons
              iconColor='#FFFFFF'
              text='Entrar usando o Google' 
              background="#DB4437" 
              textColor='#fafafa' 
              onPress={() => alert('Google')} 
              icon="google-plus-circle"
              iconSize={35}
              />
          </ButtonAling>
          

        </SafeAreaView>
			</ImageBackground>
    </Container>
  );
}

export default Login;