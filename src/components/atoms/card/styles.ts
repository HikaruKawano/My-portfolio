import styled from 'styled-components';

interface props {
  width?: string,
  height?: string,
}

export const Container = styled.div<props>`
  background: ${(props => props.color)}; 
  width: ${(props => props.width)};
  height: ${(props => props.height)}; 
  margin-left: 50px;
  margin-top: 50px;
  border-radius: 15px;
  box-shadow: 1px 1px 15px 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
