import React from 'react'
import Router from 'react-router'
import styles from './app.less'
import routes from './routes.js'

Router.run(routes, (Root, state) => {
  React.render(<Root {...state} />, document.body);
});
