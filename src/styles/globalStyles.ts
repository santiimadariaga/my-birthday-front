import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        width: 100%;
        position: relative;
        background-color: #888;
    }
    textarea {
        resize: none;
    }
`;

export default GlobalStyle;
