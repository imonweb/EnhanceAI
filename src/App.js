 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';


function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Header/>} />
        <Route path="/hero" element={<Hero/>} />
      </Routes> 
    </BrowserRouter>  
    
  
  );
}

export default App;
