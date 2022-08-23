import React, { Children, JSXElementConstructor } from 'react';

import {Container} from './styles';

type Props = {
 children: JSX.Element[],
 color?: string,
 width?: string,
 height?: string
};
const card: React.FC <Props> = ({ 
  children,
  color,
  width,
  height,
}:Props) => {

  return (
    <Container 
      color={color}
      width={width}
      height={height}
    >
      {children}
    </Container>
  );
}


export default card;