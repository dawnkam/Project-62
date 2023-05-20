import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyAp1kmutFK6gjVQnNhAJey22eRLJ7JT5Mw",
  authDomain: "project-60-83a29.firebaseapp.com",
  databaseURL: "https://project-60-83a29-default-rtdb.firebaseio.com",
  projectId: "project-60-83a29",
  storageBucket: "project-60-83a29.appspot.com",
  messagingSenderId: "338518613206",
  appId: "1:338518613206:web:a9bd6977b62b23f7f5fd77"
};
firebase.initializeApp(firebaseConfig)
export default firebase.database()