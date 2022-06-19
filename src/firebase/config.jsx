import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHAoIthu5xSFhBT9wFGvzQWUG9lEzWWC8",
  authDomain: "miniblog-e748d.firebaseapp.com",
  projectId: "miniblog-e748d",
  storageBucket: "miniblog-e748d.appspot.com",
  messagingSenderId: "607652284997",
  appId: "1:607652284997:web:6c68deef92a12bafe5712c",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
