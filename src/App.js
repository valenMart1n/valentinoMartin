
import './App.css';
import Menu from "./components/Menu/Menu";
import Sign from './components/Sign/Sign';

import SobreMi from './components/Sobre-Mi/Sobre-Mi';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
function App() {
  
  return (
    <div class="main-background">
      
      <Sign />
      <Menu />
      <SobreMi />
     
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
