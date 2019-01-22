import React, { Component } from 'react';
import Header from './common/header'
import { GlobalStyle } from './style'
import Home from './pages/home';



class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;
