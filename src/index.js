import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.scss';
import './components/NewTask/NewTask.scss'
import './components/List/List.scss'
import './components/content/Content.scss'
import './components/Task/Task.scss'

ReactDOM.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>,
    document.getElementById('root')
);