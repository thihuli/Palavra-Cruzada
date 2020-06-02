import React from 'react';

import { Container, ImageLogo } from './styles'

import image from '../../assets/logo.png';

const Logo = () => {
  return (
    <Container>
      <ImageLogo source={image} />
    </Container>
  );
}

export default Logo;