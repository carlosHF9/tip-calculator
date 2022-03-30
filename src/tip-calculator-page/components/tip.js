import styled from "styled-components";



export const Tip = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    min-width: 150px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 24px;
    background-color: ${props => props.theme.veryDarkBaseColor};
    color: ${props => props.theme.white};
    

`