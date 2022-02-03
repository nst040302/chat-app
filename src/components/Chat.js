import SignOut from './SignOut'
import ShowMessages from './ShowMessages'
import SendMessages from './SendMessages'
import { useState, useEffect } from 'react'
import { db } from './firebase'
import { collection, getDocs, query, onSnapshot, orderBy, limit, doc } from "firebase/firestore";

const Chat = () => {
    const [messages, SetMessages] = useState([])
    useEffect(() => {
        const getData = async () => {
            const q = query(collection(db, 'messages'), orderBy('createdAt'));
            await onSnapshot(q, (querySnapshot) => {
                const list = []
                querySnapshot.forEach((doc) => {
                    list.push(doc.data())
                });
                SetMessages(list)
            });
            console.log("Get data");
        };
        getData();

    }, [db]);

    return (
        <>
            {messages.length != 0 &&
                messages.map((msg, index) => <ShowMessages key={index} value={msg} />)
            }
            <SendMessages />
            <SignOut />
        </>
    );
};

export default Chat;
