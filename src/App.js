import About from "./components/about/About";
import { Home } from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
