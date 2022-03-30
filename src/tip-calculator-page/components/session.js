import styled from "styled-components";



function ToStyleSession({children, className, style}) {


    return (
        <div className={className} style={style}>{children}</div>
    )
}



export const Session = styled(ToStyleSession)`
    display: flex;
    flex-direction: column;
    min-width: 10px;
`