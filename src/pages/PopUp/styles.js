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
  height: auto;
  margin-bottom: 6px;
  border-radius: 5px;

`;

export const ImageInnerPoup = styled.Image`
  width: 23px; 
  height: 23px;
  margin: 5px;
`;

export const TextInnerPopup = styled.Text`
  color: #fff;
  position: absolute;
  margin: 10px;
  margin-left: 30px;
  line-height: 18px;
  font-size: 16px;
  font-weight: bold;
`;

export const ViewInnerPopUp = styled.View`
  width: 78%;
  height: 45px;
  background-color: ${({theme}) => theme.palette.secondary.light};
  margin-left: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const TextInner = styled.Text`
  color: #fff;
  margin-left: 15px;
  font-size: 15px;
  margin-top: 4px;
`;

export const ButtonPopUp = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.palette.secondary.light};
  position: absolute;
  align-self: flex-end;
  margin-top: 32px;
  width: 58px;
  height: 46px;
  border-radius: 5px;
  right: 5px;
  justify-content: center;
`;

export const ImageButton = styled.Image`
  align-self: center;
`;