import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Target from "./components/target"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Target />, document.getElementById('root'));
registerServiceWorker();
