
import { useContext } from 'react'
import { themeContext } from './Context'
import Navbar from './Navbar';
import Sceion from "./page/Sceion";
import Home from './page/Home'
import Sceion1 from './page/Sceion1'
import Footer from './page/Footer';
import Swiper from './page/swiper'
function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div
      className=""
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : '',
      }}

    >


      <Navbar/>
      <Sceion/>
      <Sceion1/>
      <Home/>
      <Swiper/>
      <Footer/>
 
    </div>
  )
}

export default App
