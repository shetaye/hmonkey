import React,{useState} from 'react';
import './style.css';

const Login = ({ isShowLogin }) =>{ 
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
   <form onSubmit={handleSubmit} className="form-box">
   <div className="input-container">
    <input type="text" placeholder="Username" name="uname" required />
     {renderErrorMessage("uname")}
    </div>
   <div className="input-container">
    <input type="password" placeholder="Password" name="pass" required />
     {renderErrorMessage("pass")}
   </div>
    <div className="main-row"> 
       <div className="main-column"> forgot passsword?</div>
    <div className= "main-column right-content">sign up </div>
   </div>
   <div className="button-container">
   <input type="submit" />
   </div>
   </form>
   </div>
  );
   return(
     <div className={`${!isShowLogin ? "active" : ""} show`}>
    <div className="login-form">
     <div className="title">Sign In</div>
    {isSubmitted ? <div> User is successfully logged in</div> : renderForm}
   </div>
    </div>
 
   ); 
 }

export default Login;
