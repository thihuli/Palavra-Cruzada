import React from 'react';
import { Container, Input } from './styles';


const ViewInput = (props) => {
  const { 
    placeholder,
    secureTextEntry
  } = props;

  return (
    <Container>
      <Input placeholder={placeholder} placeholderTextColor='#eeeeee' secureTextEntry={secureTextEntry} />
    </Container>
  );
};

export default ViewInput;

