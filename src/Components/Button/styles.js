import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 250px;
  height: 50px;
  padding: 15px;
  background: ${props => props.background};
  border-radius: 5px;
  justify-content: ${({icon}) => icon ? 'space-between' : 'center'};
  align-items: center;
  margin-top: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  color: ${props => props.textColor};
  text-align: center;
`;