import { createGlobalStyle } from 'styled-components';
import '../Colors/Colors.css'

const GlobalStyle =  createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
}
body::-webkit-scrollbar {
  width: 3px               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #1F2839 ;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #E33730;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  
}
`
export default GlobalStyle;