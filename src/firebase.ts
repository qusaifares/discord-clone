import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCJzDdp791FiIwreY8HvfbzgiIVLbt2LoE',
  authDomain: 'discord-app-clone.firebaseapp.com',
  databaseURL: 'https://discord-app-clone.firebaseio.com',
  projectId: 'discord-app-clone',
  storageBucket: 'discord-app-clone.appspot.com',
  messagingSenderId: '732114187578',
  appId: '1:732114187578:web:75e9f78314561a7d6b0c03',
  measurementId: 'G-X44RHQ90J4'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const emailProvider = new firebase.auth.EmailAuthProvider();

export { auth, emailProvider };
export default db;
