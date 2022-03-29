import React from "react";
import './style.css';
import Moon from './darkmodeimg.png';
function NavBar({ handleLoginClick, handleDarkModeClick }) {

  const handleClickLogin = () => {
   handleLoginClick()
  }
  const handleClickDark = () => {
   handleDarkModeClick()
  }
   return (
    <div className="navbar">
     <div className="navColumn">
       <span onClick={handleClickLogin} className="loginicon"> Sign In </span>

    </div>
    <div>
    <span onClick={handleClickDark} className="darkthemeButton">
    <img src= {Moon} alt= "dark mode button" className="smallerImg" />
    </span>
     </div>
    </div>
   );
}
export default NavBar;
