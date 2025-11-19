import React from 'react';
import styled from 'styled-components';

const Para = styled.p`
color: white
`;

export function Greeting({name, ...rest}) {
  return (
    <div>
      <Para> Hello {name}, My name is {rest.sender}</Para>
    </div>
  )
}