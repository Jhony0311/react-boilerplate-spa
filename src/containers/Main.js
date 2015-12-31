import React from 'react';
import { RouteHandler } from 'react-router';

class Main extends React.Component{
  render(){
  	console.log(this.props.children)
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Main;
