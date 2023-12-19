import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { app, db } from '../include/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

//css
import './Login.css';

const Login = ({setUserData}) => {
  const[email, setEmail] = useState('')
  const[pass, setPass] = useState('')

  const dbref = collection(db, 'userData')

  const navigate = useNavigate()

  const submit = async(e) => 
  {
      if (email.length === 0 || pass.length === 0 )
      {
          alert("Please fill all form data!")
      }
      else {
          e.preventDefault()
          try {
              const user = await app.auth().signInWithEmailAndPassword(email, pass)
              if (user) {
                const getUser = await getDocs(dbref)
                const user_snap = getUser.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                const User = user_snap.find((data) =>
                {
                  return data.email === email
                })
                console.log(User)
                setUserData(User)
                alert("Login Successfull!")
                navigate('/home')
              }
              else {
                alert("Error occured!")
              }
          } catch(error) {
              alert(error)
          }
      }
  }

  return (
    <>
        <main className='login'>
            <div className='header headr'>
                <h2>signup</h2>
            </div>

            <div className='box_input'>
                <input type='text' value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='box_input'>
                <input type='password' value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)} />
            </div>

            <p>Do not Have an Account? <Link to='/register'>Register</Link></p>
            <button onClick={submit}>Login</button>
        </main>
    </>
  )
}

export default Login;