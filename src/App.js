import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Store from './components/Store';
import Blog from './components/Blog';
import Recommendations from './components/Recommendations';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/store" component={Store} />
          <Route path="/blog" component={Blog} />
          <Route path="/recommendations" component={Recommendations} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
