import SignIn from './components/SignIn'
import Chat from './components/Chat'
import { useAuthState } from 'react-firebase-hooks/auth';
import { authentication } from './components/firebase'

function App() {
  const [user] = useAuthState(authentication)
  console.log(authentication.currentUser);
  return (
    <>
      {user ? <Chat/> : <SignIn />}
    </>
  );
}

export default App;
