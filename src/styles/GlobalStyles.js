import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --body-text: clamp(0.9375rem, 0.9224rem + 0.0862vw, 1rem);
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Nunito', sans-serif;
        background-color: ${props => props.theme.background};
        font-size: var(--body-text);
        font-weight: 500;
        line-height: 1.5;
    }

    a {
        display: inline-block;
        text-decoration: none;
        font-size: var(--body-text);
    }

    h1, h2, h3 {
        line-height: 1.1;
        margin-bottom: 12px;
        color: ${({theme}) => theme.text}
    }

    h1 {
        font-size: clamp(2.5rem, 2.1379rem + 2.0690vw, 4rem);
        font-weight: 700;
    }

    h2 {
        font-size: clamp(2.25rem, 2.0690rem + 1.0345vw, 3rem);
        font-weight: 600;
    }

    h3 {
        font-size: clamp(1.5rem, 1.3190rem + 1.0345vw, 2.25rem);
        font-weight: 500;
    }

    input, select, textarea {
        padding: 1rem;
        border-radius: 4px;
        outline: 0;
        font-family: inherit;
        font-size: var(--body-text);
        font-weight: 400;
    }

    button {
        border: 0;
        border-radius: 4px;
        display: block;
        font-family: inherit;
        font-size: var(--body-text);
        font-weight: 500;
        background-color: transparent;
        cursor: pointer;
    }
`;