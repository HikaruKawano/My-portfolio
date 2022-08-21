import React, { Children, JSXElementConstructor } from 'react';

import {Container} from './styles';

type Props = {
 children: JSX.Element[],
};
const card: React.FC <Props> = ({ children}:Props) => {
  return (
    <Container>
      {children}
    </Container>
  );
}


export default card;