import React, {Component, useState} from 'react';
import './style.css';
import Login from './loginform';
import NavBar from './navBar';
/*import DarkMode from './darkmode'; */

/* this is the main class that will be printed onto the main page*/
function Hmonkey () {
 
const [isShowLogin, setIsShowLogin] = useState(false);

 const handleLoginClick =() => {
  setIsShowLogin((isShowLogin) => !isShowLogin) 
  }

  return(

  <body>
   <NavBar handleLoginClick={handleLoginClick}/>
   <Login isShowLogin={isShowLogin} />
   <div className="row"> 
   <div className="main-content">
   <h1> Welcome to hMonkey! </h1>
   </div>
   </div> 
</body> 
)};

export default class App extends Component{
 render(){
  return(
   <Hmonkey />
  );
  }
}

