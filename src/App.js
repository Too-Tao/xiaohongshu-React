import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Header from './common/header'
import { GlobalStyle } from './style'
import Home from './pages/home';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle/>
          <Header/>
          <Home/>
        </div>
      </Provider>
    );
  }
}

export default App;
