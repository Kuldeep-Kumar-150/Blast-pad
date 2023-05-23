import './App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import TokenStacking from './components/TokenStacking';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/tokenStacking' element={<TokenStacking />} />
      </Routes>
    </>
  );
}

export default App;
