import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import initializeAuthenthication from "../Components/Login/Firebase/firebase.init";
initializeAuthenthication();
const useFirebase =()=>{
    const[user,setUser]=useState({});
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
        isLoading,
        setIsLoading,
        error
    }
     
    
}
export default useFirebase;