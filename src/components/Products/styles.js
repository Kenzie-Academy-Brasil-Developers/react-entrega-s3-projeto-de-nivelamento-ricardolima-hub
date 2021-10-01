import styled from "styled-components";

export const Container = styled.div`
    background-color: whitesmoke;
    max-width: 200px;
    max-height: fit-content;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    padding: 0.5rem;
    line-height: 1rem;
    margin: 0.5rem;
    border: 2px solid blanchedalmond;
    border-radius: 5px;

    li {
        margin-top: 0.5rem;
    }

    button {
        height: 40px;
        width: 120px;
        margin-top: 1rem;
        
    }
`