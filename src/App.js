import React from 'react';
import './App.css';


import { Switch, Route } from 'react-router-dom';


import Header from './components/header/header.components';
import Footer from './components/footer/footer.components';


import HomePage from './pages/homepage/homepage.components';


const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}




export default App;
