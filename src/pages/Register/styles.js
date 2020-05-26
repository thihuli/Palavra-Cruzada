import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.palette.primary.main};
`;

export const InputContainer = styled.View`
  flex: 1;
  top: 190px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  width: 250px;
  height: 50px;  
  top: 210px;
  align-self: center;
`;