import firebase from 'firebase';
import 'bootstrap';
import '../styles/main.scss';

import apiKeys from './helpers/apiKeys.json';
import auth from './components/Auth/auth';
import authData from './helpers/data/authData';
import myNavbar from './components/MyNavbar/myNavbar';
import machine from './components/Machine/machine';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.loginButton();
  authData.checkLoginStatus();
  myNavbar.logoutEvent();
  machine.buildTheMachine();
};

init();
