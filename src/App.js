import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.components';
import Footer from './components/footer/footer.components';


import HomePage from './pages/homepage/homepage.components';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
        <Footer />
      </div>
    );
  };
}

export default App;
