import React from 'react';
import { RouteHandler } from 'react-router';

export default class Main extends React.Component {
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}