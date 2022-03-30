import { Container } from "./components/container"
import { CalculatorContainer } from './components/calculator-container';
import { AreaTitle } from './components/area-title';
import { Input } from './components/tip-input';
import { useEffect, useState } from "react";
import { Session } from './components/session';
import { Tip } from "./components/tip";
import { Amount } from './components/amount';
import { ResetButton } from './components/reset-button';
import { CustomTipInput } from './components/custom-tip-input';
import { ErrorMessage } from './components/error-message';




export default function TipCalculator() {

    

    const [ bill, setBill ] = useState(0)
    const [numberOfPeople, setNumberOfPeople] = useState(1)
    const [billTouched, setBillTouched] = useState(false)
    const [peopleTouched, setPeopleTouched] = useState(false)

    const [baseTips, setBaseTips] = useState([
        5,
        10,
        15,
        25,
        50
    ])

    

    const [selectedTip, setSelectedTip] = useState('')
    const [customTip, setCustomTip] = useState('')

    const [ totalTipPerPerson, setTotalTipPerPerson ] = useState(0)
    const [ totalPerPerson, setTotalPerPerson] = useState(0)


    function HandleCustomTipChange(inputValue) {

        const value = parseInt(inputValue)
        if(inputValue && typeof value === 'number') {
            setCustomTip(value)
            setSelectedTip(value)
        }

        if(!inputValue) {
            setCustomTip('')
            setSelectedTip('')
        }

        
    }

    function CalculateTip() {

        if(selectedTip && numberOfPeople && bill) {
            let total = (bill + bill * (selectedTip/100))/numberOfPeople
            let totalTip = ((bill + bill * (selectedTip/100)) - bill) / numberOfPeople

            setTotalTipPerPerson(totalTip)
            setTotalPerPerson(total)

        }
    }
    

    function handleBill(inputValue) {

        const value = parseInt(inputValue)
        if(inputValue && typeof value === 'number') {
            setBill(value)
        }

        if(!inputValue) {
            setBill(0)
        }
        

    }

    function handleNumberPeople(inputValue) {
        const value = parseInt(inputValue)
        
        if(inputValue && typeof value === 'number') {
            setNumberOfPeople(value)
        }
        
        if(!inputValue) {
            setNumberOfPeople(0)
        }
    }

    function ResetTipCalculator() {
        setBill(0)
        setNumberOfPeople(0)
        setSelectedTip(0)
        setTotalTipPerPerson(0)
        setTotalPerPerson(0)
        setCustomTip('')
    }

    function billsIsTouched() {
        setBillTouched(true)
    }

    function IsValidPeople() {
        setPeopleTouched(true)

    }

    useEffect(() => {
        CalculateTip()
    }, [bill, numberOfPeople, selectedTip])

    return (
        <Container>
            <CalculatorContainer>
                <Session style={{gap: '20px'}}>
                    <Session style={{ gap: '10px'}}>
                        <AreaTitle>Bill</AreaTitle>
                        <Input value={bill} onChange={handleBill} onBlur={() => billsIsTouched()}/>
                    </Session>
                    <Session style={{gap: '10px'}}>
                        <AreaTitle>Select tip %</AreaTitle>
                
                        <Session style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: '10px'
                        }}>
                            {
                                baseTips.map( tip => (
                                    tip !== selectedTip || customTip ? <Tip onClick={() => {
                                        setSelectedTip(tip)
                                        setCustomTip('')
                                    }}>{tip}%</Tip>
                                        :
                                    <Tip onClick={() => setSelectedTip(tip)} style={{
                                        backgroundColor: 'var(--strong-cyan)',
                                        color: 'var(--very-dark-cyan)'
                                    }}>{tip}%</Tip>
                                   
                                ))
                                
                            }
                            {
                                    <CustomTipInput placeholder="Custom" value={customTip} onChange={(e) => HandleCustomTipChange(e.target.value)} />
                            }
                        </Session>
                    </Session>
                    <Session style={{ gap: '10px'}}>
                        <AreaTitle><span>Number of People</span> {numberOfPeople === 0 && peopleTouched ? <ErrorMessage style={{marginLeft: 'auto'}}>Can't be zero</ErrorMessage> : ''}</AreaTitle>
                        <Input isNotValid={numberOfPeople === 0 && peopleTouched} value={numberOfPeople} onChange={handleNumberPeople} to="person" onBlur={() => setPeopleTouched(true)}/>
                    </Session>
                </Session>
                <Session style={{
                    backgroundColor: 'hsl(183, 100%, 15%)',
                    borderRadius: '15px',

                    padding: '2rem 1.5rem 0 1.5rem'
                }}>
                    <Amount value={totalTipPerPerson}/>
                    <Amount value={totalPerPerson} to="total" />
                    
                    <ResetButton onClick={() => ResetTipCalculator()}>Reset</ResetButton>
                    

                </Session>
                
                
            </CalculatorContainer>
            
        </Container>
    )

}