import styled, { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
}
`;

export const Container = styled.div`
  background: var(--ColorPrincipal);
  height: 100vh;
  padding: 50px;
`;

export const Title = styled.h1`
  color: white;
`;

export const Text = styled.text`
  color: gray;
`;