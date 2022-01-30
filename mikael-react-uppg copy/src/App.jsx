import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Qualities from "./components/qualities/Qualities";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss"
import { useState } from "react";


function App() {
  const [menuOpen,setMenuOpen] = useState(true)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Home />
      <About />
      <Qualities />
      <Contact />
      
      </div>
    </div>
  );
}

export default App;
