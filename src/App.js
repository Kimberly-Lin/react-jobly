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
    <BrowserRouter>
      <Nav />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
