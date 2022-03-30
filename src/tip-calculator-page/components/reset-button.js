import styled from "styled-components";


export const ResetButton = styled.button`
    color: ${props => props.theme.veryDarkBaseColor}; 
    background-color: ${props => props.theme.strongBaseColor};
    border: none;
    padding: .5em 0;
    font-weight: bold;
    border-radius: 5px;
    font-size: 24px;
    font-family: ${props =>props.theme.font};
    margin-top: auto;
    margin-bottom: 20px;
    
`