
import firebase from './Firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcj9qm29YOzs4tVdPXxNAnIG_HgSsNCGM",
  authDomain: "twitter-clone-8839f.firebaseapp.com",
  databaseURL: "https://twitter-clone-8839f-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-8839f",
  storageBucket: "twitter-clone-8839f.appspot.com",
  messagingSenderId: "1040705570863",
  appId: "1:1040705570863:web:6a5d4cc4f2278e20891eda",
  measurementId: "G-E440ZC7BYZ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
