import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.palette.secondary.main};
`;

export const TopBar = styled.View`

`;

export const RankBar = styled.View`
  align-items: center;
  margin-top: 38px;
  border-bottom-width: 0.6px;
`;

export const RankBarImage = styled.Image`
  height: 35px;
  width: 106px;
  margin-bottom: 5px;
`;

export const BackPage = styled.View`
  width: 50px;
  background-color: gray;
`;