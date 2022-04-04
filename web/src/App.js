import React, {Component, useState} from 'react';
import './style.css';
import Login from './loginform';
import NavBar from './navBar';
import SignUp from './signupform';
/*import DarkMode from './darkmode'; */

/* this is the main class that will be printed onto the main page*/
function Hmonkey () {
 
const [isShowLogin, setIsShowLogin] = useState(false);
const [isShowSignUp, setIsShowSignUp] = useState(false);

 const handleLoginClick =() => {
  setIsShowLogin((isShowLogin) => !isShowLogin) 
  }

 const handleSignUpClick =() =>{
  setIsShowSignUp((isShowSignUp) => !isShowSignUp)
 } 

  return(

  <body>
   <NavBar handleLoginClick={handleLoginClick} handleSignUpClick={handleSignUpClick}/>
   <Login isShowLogin={isShowLogin} />
   <SignUp isShowSignUp={isShowSignUp} />
   <div className="row"> 
   <div className="main-content">
   <h1> Welcome to hMonkey! </h1>
   </div>
   </div> 
</body> 
);

}

export default class App extends Component{
 render(){
  return(
   <Hmonkey />
  );
  }
}

