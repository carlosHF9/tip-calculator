
import styled from 'styled-components';
import { ReactComponent as DollarIcon } from '../../images/icon-dollar.svg'
import { ReactComponent as PersonIcon } from '../../images/icon-person.svg'



function ToStyleInnerInput({value, className, onChange, type, onBlur}) {
    return <input value={value} onChange={(e) => onChange(e.target.value)} className={className} onBlur={() => onBlur()}/>
}



const InnerInput = styled(ToStyleInnerInput)`
    flex: 1;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.veryDarkBaseColor};
    font-weight: bold;
    font-size: 24px;
    font-family: ${props => props.theme.font};
    text-align: right;
    min-width: 10px;
    
    &:focus {
        outline: none; 
    }



`


function ToStyleInput({className, value, onChange, type, to, onBlur, isNotValid}) {

    if(to === 'person') {
        return (
            <div className={`${className} ${isNotValid && 'has-error'}`}>
                <PersonIcon />
                <InnerInput type={type} value={value} onChange={onChange} onBlur={onBlur}/>
            </div>
            
        )
    }

    return (
        <div className={`${className} ${isNotValid && 'has-error'}`}>
            <DollarIcon />
            <InnerInput type={type} value={value} onChange={onChange} onBlur={onBlur}/>
        </div>
        
    )
}

export const Input = styled(ToStyleInput)`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.secondGrayishBaseColor};
    padding: .7rem 1.5rem;
    border-radius: 10px;
    border: 1px solid transparent;

`