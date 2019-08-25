import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import * as indices from './indices';
import { Data } from 'react-substrate';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
	<Data config={{ indices }}>
		<App />
	</Data>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
