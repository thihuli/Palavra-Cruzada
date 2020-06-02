import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  flex-direction: row;
  border-bottom-width: 2px;
  border-color: ${({focus, theme}) => focus ? theme.palette.secondary.main : "#fff"};
  padding-bottom: 6px;
  margin-bottom: 20px;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  margin-left: 10px;
  flex: 1;
  height: 35px;
  font-size: 16px;
  color: ${({focus, theme}) => focus ? theme.palette.secondary.main : "#fff"};
`;


