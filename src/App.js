import React from 'react';
import './App.css';

import { auth, createUserProfileDocument } from './firebase/firebase.utility';

import { Switch, Route, Redirect } from 'react-router-dom';


import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/header/header.components';
import Footer from './components/footer/footer.components';


import HomePage from './pages/homepage/homepage.components';
import SignPage from './pages/signpage/signpage.components';


class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({ userAuth });
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/sign' render={() => this.props.currentUser ? (<Redirect to ='/' />): (<SignPage/>)} />
        </Switch>
        <Footer />
      </div>
    );
  };
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
