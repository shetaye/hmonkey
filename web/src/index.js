import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Moon from './darkmodeimg.png';

/* will allow the user to change the background theme of the website,
 * once I figure out how to make it work :/ */
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

/* will be used for login boxes -- needs to be fixed, popup doesn't curently work*/
export class LoginBoxes extends Component{
 render()
 { 
  return(
   <div> 
   <button onclick="document.getElementById('id01').style.display='block'">Login</button>
    
   <div id="id01" className="modal">
     <span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">&times;</span>
   <form className="modal-content animate">
     <div>
      <p> Please Log in</p>
      </div>
      <div class="container">
       <label for="uname"><b>Username</b></label>
       <input type="text" placeholder="Enter Username" name="uname" required />
  
   <label for="psw"><b>Password</b></label>
   <input type="text" placeholder="Enter Password" name="psw" required /> 
   <button type="submit">Login</button>

</div>
   

   <div class="container" >
   <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
   </div>
   </form>
   </div> 
   </div>
  );
 } 
}
/* this is the main class that will be printed onto the main page*/
export default class Hmonkey extends Component {
 render ()
 {
  return(

  
<div className="main-content">
 <DarkMode/>
   <h1> Welcome </h1>
   <br />
   <br />
 <p> please log in: </p >
  <LoginBoxes /> 
   <p> sign up: </p>
 </div> 
)}};

ReactDOM.render( // << renders the webpage, important
 <Hmonkey />, 
 document.getElementById('root')
);
