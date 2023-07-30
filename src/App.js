import './App.css';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { grey,blue } from '@mui/material/colors';
import { UpperBar, Dropdown } from './components/index'
// import UpperBar from './components/UpperBar'


const theme = createTheme({
  palette: {
    secondary: {
      main: grey[50],
    },
  }
});


function App() {
  return (
  <ThemeProvider theme={theme}>
    <div className="App" >
      <UpperBar />
      <br />
      <br />
      <br />
      <Dropdown />
    </div>
  </ThemeProvider>
  );
}

export default App;
