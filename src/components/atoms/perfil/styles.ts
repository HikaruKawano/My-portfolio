import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  top: -50px;
  position: relative;
  
`;

export const Img = styled.img`
  background: ${Props => Props.src};
  background-size: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%
`