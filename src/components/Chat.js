import React, {useEffect, useRef, useState} from 'react'
import { db , auth  } from '../firebase'
import SendMessage from 'SendMessage'
import SignOut from './SignOut'

const Chat = () => {
    const scroll = useRef
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createAt').limit(50).onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(docs => docs.data()))
        })
    }, [])
    return (
        <div>
            <SignOut />
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
                </div>
        <SendMessage  scroll={scroll}/>
        <div ref={scroll}></div>
        </div>
  )
}

export default Chat