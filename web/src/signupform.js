import React, {useState} from 'react';
import './style.css';

const SignUp = ({isShowSignUp}) =>{
 
 //registration states
 const [name, setName] = useState('');
 const [password, setPassword] = useState('');

 //Error Checks states
 const [submitted, setSubmitted] = useState(false);
 const [error, setError] = useState(false);

 //name change handler
 const handleName = (e) => {
 setName (e.target.value); 
 setSubmitted(false);
 };

 //password change Handler
 const handlePassword = (e) => {
  setPassword(e.target.value); 
  setSubmitted(false);
 }

 //form submission handler
 const handleSubmit = (e) => { 
  e.preventDefault(); 
  if(name ==='' || password === '' || name.length > 31 || password.length > 31){
   setError(true);
  }else{
   setSubmitted(true);
   setError(false);
  } 
 };

 //shows success message
 const successMessage = () =>{
  return(
   <div className= "success"
     style={{
      display: submitted ? '' : 'none',
     }}>
   <h1> User {name} successfully registered!!</h1>
   </div>
  );
 };

 //shows error message if there is an error
 const errorMessage = () => {

  if(name.length > 31){
   return(
   <div className="error"
   style={{
    display: error ? '' : 'none',
   }}>
   <h1>username is too long</h1>
   </div>
  );}
   else if(password.length > 31){
    return(
   <div className="error"
   style={{
    display: error ? '' : 'none',
   }}>
   <h1>Password is too long</h1>
   </div>
  );}
  else{
  return(
   <div className="error"
   style={{
    display: error ? '' : 'none',
   }}>
   <h1>Please enter all the fields</h1>
   </div>
  );
  }
 };

 return (
  <div className={`${!isShowSignUp ? "active" : ""} show`}> 
  <div className="signup-form">
  <div>
   <p className="title"> Sign Up</p>
  <p className="subTitle"> Username and Password must be shorter than 32 characters </p>
  </div>

  {/* calling to the methods*/}
  <div className="messages">
  {errorMessage()}
  {successMessage()}
  </div>

  <form onSubmit={handleSubmit}>
   {/* labels & inputs */}
  <input onChange={handleName} placeholder="Username" className="input-container"
  value={name} type="text" />

  <input onChange={handlePassword} placeholder="Password" className="input-container" value={password} type= "password" />

  <div className="button-container">
  <input type="submit" />
  </div>
  </form>
  </div> 
  </div>
 );
} 




export default SignUp;
