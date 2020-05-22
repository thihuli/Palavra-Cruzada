import React, { createRef, useState } from 'react';
import { useTheme } from 'styled-components/native';
import { Container, TextInput } from './styles';
import { Animated } from 'react-native';

function hexToRgb(hex){
  var c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c= hex.substring(1).split('');
      if(c.length== 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      return 'rgb('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+')';
  }
  throw new Error('Bad Hex');
}

const IconInput = (props) => {
  const {
    icon: Icon,
    iconSize=24,
    iconName="",
    placeholder
  } = props;

  const inputRef = createRef();
  const [focus, setFocus] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const theme = useTheme();

  const color = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [hexToRgb('#ffffff'), hexToRgb(theme.palette.secondary.main)]
  })

  return (
    <Animated.View>
      <Container style={[{borderColor: color, color: color}]} focus={focus} onClick={() => {inputRef.current && inputRef.current.focus()}}>
        <Icon size={iconSize} name={iconName} color={focus ? theme.palette.secondary.main : '#fff'}/>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={focus ? theme.palette.secondary.main : '#fff'}
          ref={inputRef}
          onFocus={() => {
            setFocus(true);
            Animated.timing(animation, {
              toValue: 1,
              duration: 200,
            }).start();
          }}
          onBlur={() => {
            setFocus(false);
            Animated.timing(animation, {
              toValue: 0,
              duration: 200,
            }).start();
          }}
          focus={focus}
        />
      </Container>
    </Animated.View>
  );
}

export default IconInput;