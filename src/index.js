import React from 'react';
import ReactDOM from 'react-dom';

//подключение корневого компонента
import App from './App';

//подключение стилей
import './index.scss';
import './components/NewTask/NewTask.scss'
import './components/List/List.scss'
import './components/content/Content.scss'
import './components/Task/Task.scss'


//рендер всего приложения в Strict mode
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);