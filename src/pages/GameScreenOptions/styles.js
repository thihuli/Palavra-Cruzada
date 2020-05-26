import styled from 'styled-components/native';

export const Container = styled.View `
  flex: 1;
  background-color: ${({theme}) => theme.palette.primary.main};
`;

export const TouchableAction = styled.TouchableOpacity`
  
`;

export const Header = styled.View`
  top: 9px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const HeaderDivision = styled.View`
  flex-direction: row;
  margin: 2px;
`;

export const ImageActionHeader = styled.Image`
  margin: 20px;
`;

export const Body = styled.View`
  justify-content: center;
`;

export const ImageActionBody = styled.Image`
  width: 100%;
  height: 290px;
`;


export const Foother = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ImageActionFooter = styled.Image`
  width: 160px;
  height: 160px;
`;