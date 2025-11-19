import React, {useState} from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  color: white;
`;

const names = ['Micky', 'Mini', 'Donald', 'Bruno', 'Goodfy'];

export function List(){
  return (
    <div>
    <ul>
    {
      names.map((name)=>(
        <Paragraph>Hello {name}</Paragraph>
      )
      )
    }
    </ul>
    
    </div>
  )
}