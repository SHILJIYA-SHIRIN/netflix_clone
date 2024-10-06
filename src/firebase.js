
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyB8yvkFuAYplAcfPu0cUh3TADB_bB6GmfU",
  authDomain: "netflix-clone-d9e48.firebaseapp.com",
  projectId: "netflix-clone-d9e48",
  storageBucket: "netflix-clone-d9e48.appspot.com",
  messagingSenderId: "928433638386",
  appId: "1:928433638386:web:eb48a9c8a60ccf87be796b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
