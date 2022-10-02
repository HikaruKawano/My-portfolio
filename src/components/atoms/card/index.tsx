import React, { Children, JSXElementConstructor } from 'react';

import {Container} from './styles';

type Props = {
 children: JSX.Element[],
 color?: string,
 width?: string,
 height?: string
 display?: string,
 align?: string,
  justify?: string,
  direction?: string,
};
const card: React.FC <Props> = ({ 
  children,
  color,
  width,
  height,
  direction,
  display,
  align,
  justify,
}:Props) => {

  return (
    <Container 
      color={color}
      width={width}
      height={height}
      display={display}
      align={align}
      justify={justify}
      direction={direction}
    >
      {children}
    </Container>
  );
}


export default card;