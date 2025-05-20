import Navbar from "./component/Navbar";
import "./App.css";
import HeroTop from "./component/HeroTop";
import HeroButtom from "./component/HeroButtom";
import ButtomBody from "./component/ButtomBody";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <HeroTop></HeroTop>
        <HeroButtom></HeroButtom>
        <ButtomBody></ButtomBody>
      </div>
    </>
  );
}

export default App;
