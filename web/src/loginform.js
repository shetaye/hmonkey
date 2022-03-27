import React,{useState} from 'react';
import './index.css';



export var LoginBoxes = function(){ 
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

const renderErrorMessage = (name) =>
 name === errorMessages.name && (
   <div className="error">{errorMessages.message}</div>
 );
//tester, just to make sure the login works. will be changed later when logins are
//actually created
const database = [ 
 {
  username: "user1",
  password: "pass1"
 },
 {
  username:"user2",
  password: "pass2"
 }
];
const errors = {
 uname: "Invalid username",
 pass: "invalid password" 
};
const handleSubmit = (event) => {
 event.preventDefault();

 var { uname, pass } = document.forms[0];

const userData = database.find((user) => user.username === uname.value);

// Compare user info
if (userData){
  if(userData.password !== pass.value){
   //invalid passwords
   setErrorMessages({ name: "pass", message: errors.pass });
  }else{
   setIsSubmitted(true);
  
  }
 }else{
   //when the username isn't found.
   setErrorMessages({name: "uname", message: errors.uname });
  }
};

  const renderForm = (
   <div className="form"> 
   <form onSubmit={handleSubmit}>
   <div className="input-container">
    <label>Username </label>
    <input type="text" name="uname" required />
     {renderErrorMessage("uname")}
    </div>
   <div className="input-container">
    <input type="password" name="pass" required />
     {renderErrorMessage("pass")}
   </div>
   <div className="button-container">
   <input type="submit" />
   </div>
   </form>
   </div>
  );
   return(
    <div className="main-content">
     <div className="login-form">
     <div className="title">Sign In</div>
    {isSubmitted ? <div> User is successfully logged in</div> : renderForm} 
   </div>
   </div>
 
   ); 
 }

export default class Login extends React.Component{
 render()
 {
  return(
   <LoginBoxes />
  );
 } 
}
