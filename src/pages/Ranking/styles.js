import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.palette.secondary.main};
`;


export const RankBar = styled.View`
  align-items: center;
  margin-top: 38px;
  border-bottom-width: 0.4px;
  flex-direction: row;

`;

export const RankBarImage = styled.Image`
  height: 35px;
  width: 106px;
  margin-bottom: 5px;
`;

export const BackPage = styled.View`
  margin-left: 10px;
  margin-right: 130px;
`;

export const Wrapper = styled.ScrollView`
  
`;

export const Box = styled.View`
  width: 95%;
  height: 68px;
  background-color: ${({theme}) => theme.palette.primary.main};
  margin-top: 6px;
  margin-bottom: 4px;
`;