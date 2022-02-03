import { authentication } from './firebase'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .then(re => {
                console.log(re);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <>
            <button onClick={signInWithGoogle}>Sign In</button>
        </>
    );
};

export default SignIn;
