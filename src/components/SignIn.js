import React from 'react'
import firebase from 'firebase'
import {Button} from '@material-ui/core'
import {auth} from '../firebase.js'

const SignIn = () => {
    function SignInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.SignInWithPopup(provider)
    }
  return (
    <div>
        <Button onClick={SignInWithGoogle}> Sign In With Google</Button>
    </div>
  )
}

export default SignIn
