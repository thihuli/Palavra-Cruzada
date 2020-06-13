import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ButtonBack from '../../Components/ButtonBack';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import { 
  Container,
  RankBar, 
  RankBarImage, 
  BackPage, 
  Wrapper, 
  Box } from './styles';

import ranktop from '../../assets/Ranking/RankTop.png'
import { View, Text } from 'react-native';

const Ranking = () => {
  const navigation = useNavigation();

  const Tab = createMaterialTopTabNavigator();

  function navigateBack() {
    navigation.goBack()
  }

  function FacebookRanking() {
    return (
      <Container>
        <Wrapper>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>

        </Wrapper>
      </Container>
    );
  }

  function GlobalRanking() {
    return (
      <Container>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Página Global!</Text>
        </View>
      </Container>
    );
  }
  
  function FrendsRanking() {
    return (
      <Container>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Página Amigos!</Text>
        </View>
      </Container>
    );
  }
  
  return (
    <Container>
        <RankBar>
          <BackPage>
            <ButtonBack onPress={navigateBack} />
          </BackPage>
          <RankBarImage source={ranktop} />
        </RankBar>         
      
    
      <Tab.Navigator >
        <Tab.Screen name="Facebook" component={FacebookRanking} />
        <Tab.Screen name="Global" component={GlobalRanking} />
        <Tab.Screen name="Amigos" component={FrendsRanking} />
      </Tab.Navigator>
    </Container>
  );
}



export default Ranking;