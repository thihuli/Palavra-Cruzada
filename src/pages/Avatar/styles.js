import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.palette.primary.main};
`;

export const TitleText = styled.Text`
  font-size: 25px;
  color: #FFFFFF;
  font-style: normal;
  line-height: 30px;
  align-content: center;
  align-self: center;
  align-items: center;
  top: 75px;
`;

export const AvatarContainer = styled.View`
  flex: 1;
  top: 140px;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.Image`
  width: 422px;
  height: 410px;  
`;

export const ButtonContainer = styled.View`
  flex: 1;
  top: 190px;
  width: 250px;
  height: 50px;
  align-self: center;
`;