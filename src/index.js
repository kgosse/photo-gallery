require('./styles/main.scss');
require('./styles/lib/bootstrap/dist/css/bootstrap.min.css');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
