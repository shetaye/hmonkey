import React from "react";
import './style.css';

function NavBar({ handleLoginClick, handleSignUpClick,}) {

  const handleClickLogin = () => {
   handleLoginClick()
  }
 
 const handleClickSignUp =() =>{
  handleSignUpClick()
 }

   return (
    <div>
    <nav className= "navbar">
    <div className = "navColumnL"> 
     </div>
  <div className="navColumnR">
    <div className="navSubColumnR navbarButtons" onClick={handleClickSignUp}> Register
     </div>
    <div className="navSubColumnR navbarButtons" onClick={handleClickLogin}> Sign In
     </div>
         </div>
    </nav>
   </div> 
   );
}
export default NavBar;
