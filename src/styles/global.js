import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        list-style: none;
        font-family: "Roboto Mono", monospace;
    }

    body {
        background-color: aliceblue;
        color: black;
    }

    body, input, button {
        font-family: 'PT Serif', serif;
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

`