import styled from 'styled-components/native';


export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 250px;
  height: 50px;
  padding: 15px;
  background: ${props => props.background};
  border-radius: 5px;
  justify-content: center;
  margin: 7px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  color: ${props => props.textcolor};
  text-align: center;
`;

export const Icon = styled.View`
  right: 15px;
  justify-content: center;
`;