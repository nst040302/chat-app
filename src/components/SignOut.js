import { signOut } from 'firebase/auth';
import { authentication } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const SignOut = () => {
    const [user, loading, error] = useAuthState(authentication)
    return (
        <div>
            <button onClick={() => signOut(authentication)}>Sign Out</button>
        </div>
    );
};

export default SignOut;
