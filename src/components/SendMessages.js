import { authentication } from './firebase'
import { db } from './firebase'
import { useState } from 'react'
import firebase from 'firebase/compat/app'
import { collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

const SendMessages = () => {
    const [msg, setMsg] = useState('')
    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL, displayName } = authentication.currentUser
        await addDoc(collection(db, "messages"), {
            name: displayName,
            text: msg,
            createdAt: serverTimestamp(),
            uid: uid,
            photoURL
        });
        setMsg('')
    }
    return (
        <>
            <div>
                <form onSubmit={sendMessage}>
                    <div className="sendMsg">
                        <input placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SendMessages;
