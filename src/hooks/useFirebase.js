import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import initializeAuthenthication from "../Components/Login/Firebase/firebase.init";
initializeAuthenthication();
const useFirebase =()=>{
    const[user,setUser]=useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    const auth = getAuth();

    const signInUsingGoogle=()=>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
           history.push(redirect_uri);
        })
        .finally(()=>setIsLoading(false))
    }

       //name change handle
    const handleNameChange = e => {
        setName(e.target.value);
      }

      //email change handle
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
      
      //password change handle
      const handlePasswordChange = e => {
        setPassword(e.target.value);
      }

      //registration handle
      const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }
        const setUserName = () => {
            updateProfile(auth.currentUser, { displayName: name })
              .then(result => { })
          }
        //creating user with email and password
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          setError('');
          setUserName();
          logOut();
          history.push('/login')
        })
        .catch(error => {
          setError(error.message);
        })
      }
  //login handle
  const handleLogin = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      history.push(redirect_uri);
      setError('');
    })
    .catch(error => {
      setError(error.message);
    })
  }

    useEffect(()=>{
      const unsubscribed=onAuthStateChanged(auth,user=>{
          if(user){
              setUser(user)
          }
          else{
              setUser({})
          }
          setIsLoading(false)
      })
      return ()=>unsubscribed;
    },[])
    
    const logOut=()=>{
      setIsLoading(true);
      signOut(auth)
      .then(()=>{
        setUser({})
      })
      .finally(()=>setIsLoading(false))
  }
    return{
        user,
        signInUsingGoogle,
        logOut,
        handleLogin,
        isLoading,
        setIsLoading,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        error
    }
     
    
}
export default useFirebase;