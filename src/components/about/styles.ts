import styled from 'styled-components';
import background from '../../assets/background2.jpg';

export const Container = styled.div`
  background-image:url(${background});
  height: 100vh;
  padding: 50px;
  background-size: cover;
  display: flex;
`;

export const Title = styled.h1`
  color: white;
`;

export const Text = styled.text`
  color: gray;
`;