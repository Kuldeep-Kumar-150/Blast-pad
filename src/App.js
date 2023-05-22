import './App.css';
import BlockChain from './components/BlockChain';
import Header from './components/Header';
import MyNav from './components/MyNav';
import RoadMap from './components/RoadMap';

function App() {
  return (
    <>
      <div class="overflow-hidden">
        <div className='header_bg_img xl:flex xl:flex-col xl:min-h-[100vh]'>
          <MyNav />
          <Header />
        </div>
        <BlockChain />
        <RoadMap />
      </div>
    </>
  );
}

export default App;
