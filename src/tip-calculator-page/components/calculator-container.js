import styled from "styled-components";

export const CalculatorContainer = styled.div`
    display: grid;
    grid-template-areas: "one" "two";
    grid-auto-columns: 1fr;
    background-color: ${props => props.theme.white};
    gap: 15px;
    border-radius: 25px;
    max-width: 800px;
    padding: 2em;
    margin: auto auto;

    @media (min-width: 50em) {

        & {
            grid-template-areas: "one two";
        }
    }

`

