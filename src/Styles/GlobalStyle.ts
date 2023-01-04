import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
}

  body{
    background-color: lightgrey;
    font-family: 'Roboto Mono', monospace;
}

    ::-webkit-scrollbar{
    width: 0.5rem;
    height: 0.5rem;
}

    ::-webkit-scrollbar-track{
    background: black;
}

    ::-webkit-scrollbar-thumb{
    background: rgb(175, 41, 175);
    border-radius: 5px;
}

    ::-webkit-scrollbar-thumb:hover{
    background: purple;
    border-radius: 5px;
}
`