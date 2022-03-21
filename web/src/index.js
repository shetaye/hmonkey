import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class HMonkey extends Component {
 render ()
 {
  return( 
 <div> 
 <h1> Greetings </h1>
 <p> this is just filler, for now </p >
   <p> current user: not yet implemented </p>
 </div>
  )}};


ReactDOM.render(
 <HMonkey />, 
 document.getElementById('root')
);
