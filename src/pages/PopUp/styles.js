import styled from 'styled-components/native';

export const PopUp = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 35px;
  
`;

export const PopUpInner = styled.View`
  background-color: ${({theme}) => theme.palette.secondary.main};
  width: 92%;
  height: auto;
  border-top-left-radius: 31px;
  border-top-right-radius: 31px;
  align-items: center;

`;

export const ViewPopUp = styled.View`
  background-color: ${({theme}) => theme.palette.primary.main};
  width: 93%;
  height: 70px;
  margin-bottom: 6px;

`;