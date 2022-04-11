import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import ThemeContextWrapper from './themeContextWrapper';


ReactDOM.render(
<ThemeContextWrapper>
 <React.StrictMode>
<App />
 </React.StrictMode>
 </ThemeContextWrapper>,
 document.getElementById('root')
);
