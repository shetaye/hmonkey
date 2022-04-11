import React from 'react';
import Moon from './darkmodeimg.png';

export default function ToggleDark(props){
 return (
  <div> 
   <div class="wrapper">
    <label class="switch">
     <input type="checkbox"
       id="checkbox-toggle"
       onClick={() => { 
        props.toggleDark();
       }}
       />
      <img src={Moon} className="smaller-img"/>
     </label>
   </div>
  </div>
 );
}
