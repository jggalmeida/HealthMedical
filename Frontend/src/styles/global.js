import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    *{
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus {
        outline: 0;  
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    border-style, input, button{
        font: 14px 'roboto', sans-serif;
    }
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
    button{
        cursor: pointer;
    }
`;