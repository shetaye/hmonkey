import React from "react";
import './style.css';
import Moon from './darkmodeimg.png';
function NavBar({ handleLoginClick, handleDarkModeClick, handleSignUpClick}) {

  const handleClickLogin = () => {
   handleLoginClick()
  }
  const handleClickDark = () => {
   handleDarkModeClick()
  }
 const handleClickSignUp =() =>{
  handleSignUpClick()
 }

   return (
    <div className="navbar">
    <div className="navColumnL">  
    <div className="navSubColumn">
      <span onClick={handleClickLogin} className="loginicon"> Sign In </span>
    </div>
    <div className="navSubColumn">
      <span onClick={handleClickSignUp} className="loginicon"> Register </span>
    </div>
    </div>
 <div className="navColumnR">
    <span onClick={handleClickDark} className="darkthemeButton">
    <img src= {Moon} alt= "dark mode button" className="smallerImg" />
    </span>
     </div>
   </div> 
   );
}
export default NavBar;
