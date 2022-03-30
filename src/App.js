import logo from './logo.svg';
import './App.css';
import styled, { ThemeProvider } from 'styled-components'
import TipCalculator from './tip-calculator-page/index';



// :root {
//   --strong-cyan: hsl(172, 67%, 45%);

//   --very-dark-cyan: hsl(183, 100%, 15%);
//   --dark-grayish-cyan: hsl(186, 14%, 43%);
//   --secnd-dark-greyish-cyan: hsl(184, 14%, 56%);
//   --light-grayish-cyan: hsl(185, 41%, 84%);
//   --light-grayish-cyan: hsl(189, 41%, 97%);
//   --white: hsl(0, 0%, 100%);
// }

const theme = {
  strongBaseColor: 'hsl(172, 67%, 45%)',
  veryDarkBaseColor: 'hsl(183, 100%, 15%)',
  darkGrayishBaseColor: 'hsl(186, 14%, 43%)',
  secondDarkGrayishBaseColor: 'hsl(184, 14%, 56%)',
  lightGrayishBaseColor: 'hsl(185, 41%, 84%)',
  secondGrayishBaseColor: 'hsl(189, 41%, 97%)',
  white: 'hsl(0, 0%, 100%)',
  font: "'Space Mono', monospace",
  errorColor: "#c97e6b"


}


const AppContainer = styled.div`
  background-color: ${props => props.theme.veryDarkBaseColor};


  .has-error {
    border: 1px solid ${props => props.theme.errorColor};
  }

`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer className="App">
        <TipCalculator />
      </AppContainer>
    </ThemeProvider>
    
  );
}

export default App;
