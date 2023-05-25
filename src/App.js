import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import TokenStacking from './components/TokenStacking';
import TokenPage from './components/TokenPage';
import AirDrop from './components/AirDrop';
import FreeWork from './components/FreeWork';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/tokenStacking' element={<TokenStacking />} />
        <Route path='/createtoken' element={<TokenPage />} />
        <Route path='/airdrop' element={<AirDrop />} />
      </Routes>
      {/* <FreeWork/> */}
    </>
  );
}

export default App;
