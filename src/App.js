import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Error } from './Error';

function App() {
  return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} >
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="*" element={<Error />}/>
     </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
