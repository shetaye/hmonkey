import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './loginform.js';
//import Moon from './darkmodeimg.png';

/* will allow the user to change the background theme of the website,
 * once I figure out how to make it work :/ hiding the button for now, until I can make it sit properly */
/*
export class DarkMode extends Component{ 

 render(){ 
  return(
   <div>
    <button onclick="document.getElementById('body').setAttribute(className, 'darktheme')" className="darkthemeButton">
   <img src={Moon} alt="Dark mode switch" className="smallerImg"/></button> 
   </div>
  );
 } 
} 
*/


/* this is the main class that will be printed onto the main page*/
export default class Hmonkey extends Component {
 render ()
 {
  return(

  <div>
   <div className="row"> 
   <div className="left-buttons">
   </div>
   <div className="main-content">
   <h1> Welcome </h1>
   </div>
   </div> 
   <div className="row">
   <Login />
   </div>
   <div className="row">
   <div className="main-content">
  <p> sign up: </p>
   </div>
   </div> 
 </div> 
)}};


ReactDOM.render( // << renders the webpage, important
 <Hmonkey />, 
 document.getElementById('root')
);
