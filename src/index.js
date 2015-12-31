import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router';
import styles from './styles/less/app.less';
import routes from './routes/';

// Add #root element to body
let g = document.createElement('div');
g.setAttribute("id", "root");
document.body.appendChild(g);

render((routes), document.getElementById('root'));