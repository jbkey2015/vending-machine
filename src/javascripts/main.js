import firebase from 'firebase';
import 'bootstrap';
import '../styles/main.scss';

import apiKeys from './helpers/apiKeys.json';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  console.error('hi', apiKeys.firebaseKeys);
};

init();
