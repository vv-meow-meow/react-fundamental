import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(React.createElement("button", {
  onClick: () => console.log('clicked')
}, "Нажми на меня!"));