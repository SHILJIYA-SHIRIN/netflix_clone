
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";
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
const db = getFirestore(app);

const signUp = async(name,email,password)=>{
try {
  const res=  await createUserWithEmailAndPassword(auth, email, password);
  const user =res.user;
   await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider: "local",
    email,
   });
} catch (error) {
    console.log(error);
  toast.error(error.code.split('/')[1].split('-').join(" "));
}
}
const login = async(email, password)=>
{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" ") );
    }
}
const logOut=()=>{
signOut(auth);
}
export {auth,db,login,logOut,signUp};