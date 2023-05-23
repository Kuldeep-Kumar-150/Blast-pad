import "./App.css";
import BlaspadBonesSection from "./components/BlaspadBonesSection";
import BlockChain from "./components/BlockChain";
import Header from "./components/Header";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import RoadMap from "./components/RoadMap";

function App() {
  return (
    <>
      <div class="overflow-hidden">
        {/* <div className="header_bg_img xl:flex xl:flex-col xl:min-h-[100vh]">
          <MyNav />
          <Header />
        </div>
        <BlockChain />
        <RoadMap />
        <MyFooter /> */}
        <BlaspadBonesSection />
      </div>
    </>
  );
}

export default App;
