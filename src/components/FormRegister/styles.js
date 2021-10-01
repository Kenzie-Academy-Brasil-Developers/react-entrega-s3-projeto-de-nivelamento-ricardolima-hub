import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        display:flex;
        flex-direction: column;
    }

    div + div {
        margin-top: 1rem;
    }
`