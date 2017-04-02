import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header.js';
import Grid from './components/Grid.js';
import Footer from './components/Footer.js'
import BodyHead from './components/BodyHead.js'

class App extends React.Component {
  render () {
    return( 
    	<div>
            <Header />
            <BodyHead />
            <Grid />
            <Footer />
    	</div>
    )	
  }
}

render(<App/>, document.getElementById('app'));
