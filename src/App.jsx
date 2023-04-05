import Paintings from './components/Paintings'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Posters from './components/Posters'
import DigitalArt from './components/DigitalArt'
import Nav from './components/Nav'
import {SliderData} from "./components/SliderData"


function App() {

  return (
    <div className="App">
      <Home />
      <Nav/>
      <DigitalArt />
      <Paintings slides={SliderData} />
      <Posters />
      <About />
      <Contact />
      
    </div>
  )
}

export default App
