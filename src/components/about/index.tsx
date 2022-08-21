import React from 'react';
import {
  Container,
  Title,
  Text
} from './styles';
import  Card  from '../atoms/card';
import  Perfil from '../atoms/perfil'

const about: React.FC = () => {
  return (
    <Container>
      <Card>
        <Perfil imgPerfil='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TphB1VfzMThYyPh_2GAs_kqsfvGcQITKaQ&usqp=CAU'/>
        <Title>Hikaru</Title>
        <Text>Programador</Text>
      </Card>
        
     
    </Container>
  );
}

export default about;