import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/client/components/App';
import '@/client/styles/tailwind.css';

ReactDOM.hydrate(<App />, document.getElementById('root'));
