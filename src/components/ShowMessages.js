import { authentication } from './firebase'


const ShowMessages = ({ value }) => {
    const { name, text, uid, photoURL } = value
    console.log(value);
    return (
        <div className={uid === authentication.currentUser.uid ? 'sent' : 'received'}>
            <h1>{name}</h1>
            <p>{value.text}</p>
        </div>
    )
};

export default ShowMessages;
