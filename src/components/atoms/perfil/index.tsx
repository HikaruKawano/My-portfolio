import React from 'react';

import {
  Container,
  Img
} from './styles';

type Props = {
  imgPerfil: string,
}
const perfil: React.FC <Props> = ({imgPerfil}) => {
  return (
    <Container>
      <Img src={imgPerfil} />
    </Container>
  );
}

export default perfil;