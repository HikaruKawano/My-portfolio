import styled from 'styled-components';


interface props{
  display: string;
  mb?: string;
  height?: string;
}

export const Container = styled.div<props>`
  height: ${(props => props.height)};
  margin-bottom: ${(props => props.mb )} ;
  background-size: cover;
  display: ${(props => props.display)};
`;

export const Title = styled.h1`
  color: white;
`;

export const Text = styled.text`
  color: gray;
`;