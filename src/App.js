import './App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import TokenStacking from './components/TokenStacking';
import BlaspadBonesSection from "./components/BlaspadBonesSection";
import TokenPage from './components/TokenPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/tokenStacking' element={<TokenStacking />} />
        <Route path='/createtoken' element={<TokenPage />} />
      </Routes>
    </>
  );
}

export default App;
