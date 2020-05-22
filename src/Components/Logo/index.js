import React from 'react';


import { Container, ImageLogo } from './styles'

import Icon from '../../assets/Icon2.png';

const Logo = () => {
  return (
    <Container>
      <ImageLogo source={Icon} ></ImageLogo>
    </Container>
  );
}

export default Logo;