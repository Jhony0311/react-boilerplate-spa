import React from 'react';

class Hello extends React.Component{
  render () {
    return <div className='container'>
        <header role='banner'>
          <h1 style={{fontWeight: '100', fontSize: '4rem', marginTop: '16rem'}}>boilerplate-hjs-webpack</h1>
        </header>
        <p>Check it out on <a href={'https://github.com/clintonhalpin/boilerplate-hjs-webpack'} style={{ color: 'white'}}>github</a> <br /><br/> built by <a href={'http://twitter.com/clintonhalpin'} style={{ color: 'white'}}>@clintonhalpin</a><br /><br />taken from <a href={'https://github.com/HenrikJoreteg/hjs-webpack/tree/master/examples/assets-and-index-html'} style={{ color: 'white'}}>hjs-webpack</a></p>
        <p>See <a href={'/#/another'} style={{ color: 'white'}}>Another Route!</a></p>
      </div>
  }
}

export default Hello


