import styled from 'styled-components/native';
import Constants from 'expo-constants';


export const Container = styled.View`
  flex: 1;
  background-color: #26BE8D;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;  
  padding: ${() => `${Constants.statusBarHeight + 20}px 20px 20px 20px`};
  opacity: 0.9;
`;

export const LogoContainer = styled.View`
  flex: 1;
`;

export const ButtonAling = styled.View`
  align-items: center;

`;

export const Text = styled.Text`
  color: #FFFFFF; 
  font-size: 16px;
  text-align: right;
  font-weight: bold;
`;

export const TextButonn = styled.Text`
  color: #FFFFFF;
  margin: 16px;
  text-align: center;
`;

export const ContainerInput = styled.View`
  margin-bottom: 15px;

`;

/* export const Touch = styled.TouchableOpacity`
  background: #00709d ;
  flex-direction: row;
  width: 250px;
  height: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 5px;
  
`; */


/* //resize-mode: cover; */