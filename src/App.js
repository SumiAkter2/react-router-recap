import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Friends from "./Components/Friends";
import About from "./Components/About";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Posts from "./Components/Posts";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/friend" element={<Friends />}></Route>
        <Route path="/friend/:friendId" element={<Details />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/post" element={<Posts />}></Route>
        {/* <Route path='/friend' element={<Friends/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
