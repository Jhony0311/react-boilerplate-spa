import React from 'react';
import { Link } from 'react-router';

class Hello2 extends React.Component{
  render () {
    return (
        <div className='container'>
        <header role='banner'>
          <h1 style={{fontWeight: '100', fontSize: '4rem', marginTop: '16rem'}}>Another Route!</h1>
          <Link to="/">Go Back</Link>
        </header>
      </div>
    )
  }
}

export default Hello2;