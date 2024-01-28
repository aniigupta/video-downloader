import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/nav";
import ImageContainer from "./components/Imagecontainer/op.jsx";
import Homepage from "./components/Homepage/Card.jsx";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ImageContainer></ImageContainer>
      <Homepage></Homepage>
    </div>
  );
}

export default App;
