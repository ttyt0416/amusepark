import React from 'react';
import './App.css';


import { Switch, Route } from 'react-router-dom';


import Header from './components/header/header.components';
import Footer from './components/footer/footer.components';


import HomePage from './pages/homepage/homepage.components';
import AmusePage from './pages/amusepage/amusepage.components';
import CommunicatePage from './pages/communicatepage/communicatepage.components';
import InfoPage from './pages/infopage/infopage.components';
import SocialPage from './pages/socialpage/socialpage.components';


const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/amuse' component={AmusePage} />
        <Route exact path='/communicate' component={CommunicatePage} />
        <Route exact path='/info' component={InfoPage} />
        <Route exact path='/social' component={SocialPage} />
      </Switch>
      <Footer />
    </div>
  );
}




export default App;
