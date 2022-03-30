import styled from "styled-components";

function ToStyleAreaTitle({className, children}) {

    return <span className={className}>{children}</span>
}

export const AreaTitle = styled(ToStyleAreaTitle)`
    display: flex;
    color: ${props => props.theme.darkGrayishBaseColor};
    font-weight: bold;
`