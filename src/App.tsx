
import { useContext } from 'react'
import { themeContext } from './Context'
import Navbar from './Navbar';
import Sceion from "./page/Sceion";
import Data from './page/Data'
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
 
    </div>
  )
}

export default App
