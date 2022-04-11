import React, {Component} from 'react';
import './style.css';

export default class MainText1 extends Component{
 render(){
  return(
  <div>
   <div className="row">
   <div className="main-content">
     <h2 className="textFormatter"> What is hMonkey? </h2>
   </div>
   </div>
   <div className="row"> 
   <div className="main-content">
     <p> hMonkey is a website that rewards you for complete hCaptchas, and the name is inspired by SurveyMonkey, hence the name, <strong><em> hMonkey! </em></strong> </p>
   </div>
   </div>
   </div>
  );
 }
}
