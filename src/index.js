import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Todos from './Todos';

ReactDOM.render(
  <React.StrictMode>
    <Todos />
  </React.StrictMode>,
  document.getElementById('root')
);
// index为开启文件，网站解析从index.js开始
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
