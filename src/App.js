import './App.css';
import Routes from './Routes';
import Nav from './Nav';
import { BrowserRouter } from 'react-router-dom';

/** Renders jobly app
 * 
 * prop: none
 * state: none
 * 
 * Index -> App -> {Routes, Nav}
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </div >
  );
}

export default App;
