import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Stock from './pages/Stock';
import Dashboard from './pages/Dashboard';

function App() {
  const apikey = "fae450aeeeaef90e058c98edfc4cae26"
  


  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/stocks' element={<Dashboard apikey={apikey} />} />
        <Route path='/stocks/:symbol' element={<Stock apikey={apikey}/>}/>

      </Routes>
    </div>
  );
}

export default App;
