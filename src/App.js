import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import TokenStacking from './components/TokenStacking';
import TokenPage from './components/TokenPage';
import AirDrop from './components/AirDrop';
import { useEffect } from "react";
import PreLoader from "./components/PreLoader";
import BackToTop from "./components/BackToTop";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      delay: 100,
    });
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/airdrop' element={<AirDrop />} />
        <Route path='/tokenStacking' element={<TokenStacking />} />
        <Route path='/createtoken' element={<TokenPage />} />
      </Routes>
      {/* <PreLoader /> */}
      <BackToTop />
    </>
  );
}

export default App;
