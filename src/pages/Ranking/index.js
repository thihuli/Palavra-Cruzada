import React from 'react';



import { 
  Container, 
  TopBar,
  RankBar, 
  RankBarImage, 
  BackPage } from './styles';

  import ranktop from '../../assets/Ranking/RankTop.png'

const Ranking = () => {

  
  return (
    <Container>
      <TopBar>
        <RankBar>
          <RankBarImage source={ranktop} />
          <BackPage>
            
          </BackPage>
        </RankBar>

      </TopBar>

    </Container>
    );
}

export default Ranking;