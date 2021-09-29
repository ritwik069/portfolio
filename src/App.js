
import './App.css';
import Projects from './components/Projects/Projects';
import Topbar from './components/Topbar/Topbar'
import Intro from './components/Intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import { useState } from 'react';
import Menu from './components/Menu/Menu';

function App() {
  const [menu,setmenu]=useState(false);
  return (
    <div className={"App "}>
      <Topbar menu={menu} setmenu={setmenu}/>
      <Menu menu={menu} setmenu={setmenu}/>
      <div className={"section "}>
        
        <Intro />
        <Portfolio />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
