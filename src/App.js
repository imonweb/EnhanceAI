 
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CodeContainer from './components/CodeContainer';
import ControlBtns from './components/ControlBtns';
import Header from './components/Header';
import Hero from './components/Hero';
 
// Tools for layout
//  border-solid border-2 border-indigo-600


function App() {
  return (
   <>
    <Header />
    <Hero />
    <CodeContainer/>
    <ControlBtns/>
   </>
  );
}

export default App;



