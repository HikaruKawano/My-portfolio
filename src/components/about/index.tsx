import React, { useEffect, useState } from 'react';
import Card from '../atoms/card';
import Perfil from '../atoms/perfil';
import GlobalStyle from '../GlobalStyle';
import {
  Container, Text, Title
} from './styles';

const about: React.FC = () => {

  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/HikaruKawano/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <>
      <Container display='flex' >
        <Card
          color='var(--ColorSecundario)'
          width='330px' height='80vh'
          display='flex'
          align='center'
          justify='center'
          direction='column'
        >
          <GlobalStyle />
          <Perfil imgPerfil='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TphB1VfzMThYyPh_2GAs_kqsfvGcQITKaQ&usqp=CAU' />
          <Title>Hikaru</Title>
          <Text>Programador</Text>
        </Card>

        <Card color='var(--ColorSecundario)' width='60vw'>
          <GlobalStyle />
          <Title>Hikaru</Title>
          <Text>Programador</Text>
        </Card>

      </Container>
      <Container display='flex' mb='20px'>
        <Card
          color='var(--ColorSecundario)'
          width='90vw'
          height='70vh'


        >
          <h2>Projetos</h2>
          <ul>
            {
              repositories.map(repository => {
                return (
                  <li>
                    <h3>{repository.name}</h3>
                    <p>{repository.description}</p>
                  </li>
                )
              })
            }
          </ul>
        </Card>
      </Container>
    </>
  );
}

export default about;