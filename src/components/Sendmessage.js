import React, {useState} from 'react'
import { db, auth }  from '../firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'

const Sendmessage = ({scroll}) => {
    const [msg, setMsg] = useState('')

    async function SendMessage () {
        const [msg , setmsg] = useState('')

        async function SendMessage(e) {
            e.preventDefault()
            const {uid, auth } = auth.currentUser
        }
        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({behavior: 'smooth' })
     }
  return (
    <div>
        <form onSubmit={SendMessage}>
            <Input valu ={msg} onChange={(e)=> setMsg(e.target.value)} placeholder="message..."/>
            <Button type="submit">Send</Button>
        </form>
    </div>
  )
}

export default Sendmessage
