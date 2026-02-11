import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home";
import Booktable from "./pages/Booktable"
import Menu from "./pages/Menu";
import About from "./pages/About";
function App() {
 

  return (
    <div className="[overscroll-behavior:none] [touch-action:pan-y]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/booktable" element={<Booktable />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
