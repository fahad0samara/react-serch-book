import React, { useContext ,useState,} from "react";

import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs"
import { themeContext } from "./Context";


const Toggle = () => {


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
  
     
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className=" flex  justify-center" onClick={handleClick}>
      {darkMode ? <BsFillMoonFill   size={30} /> : <BsFillSunFill  color=" " size={30}  />}

     
    </div>
  );
};

export default Toggle;