import styled from "styled-components";

export const CustomTipInput = styled.input`
    height: 50px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 24px;
    max-width: 150px;
    margin: 0;
    padding: 0;
    border: 1px solid white;
    color: ${props => props.theme.darkGrayishBaseColor};
    background-color: ${props => props.theme.secondGrayishBaseColor};
    text-align: center;
    


    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme.strongBaseColor};
    }

`