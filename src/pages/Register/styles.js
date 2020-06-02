import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.palette.primary.main};
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  width: 250px;
  height: 50px;
  align-self: center;
`;