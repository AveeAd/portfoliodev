import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<Router basename="/portfoliodev">
		<App />
	</Router>,
	document.getElementById('root')
);
