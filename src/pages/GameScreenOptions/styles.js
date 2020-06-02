import styled from 'styled-components/native';

export const Container = styled.View `
  background-color: ${({theme}) => theme.palette.primary.main};
  flex: 1;
`;

export const TouchableAction = styled.TouchableOpacity`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  margin-top: 38px;
`;

export const HeaderDivision = styled.View`
  flex-direction: row;
`;

export const TouchableActionHeader = styled.TouchableOpacity`
  margin: 5px;
`;
export const ImageActionHeader = styled.Image`
`;

export const Body = styled.View`
  flex: 1;
  align-items: stretch;
`;

export const ImageActionBody = styled.Image`
  flex: 1;
  width: 100%;
`;

export const Footer = styled.View`
  flex-direction: row;
`;

export const ImageActionFooter = styled.Image`
  width: 100%;
  height: 140px;
`;

