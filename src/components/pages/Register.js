import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { app, db } from '../include/firebaseConfig';
import { collection, addDoc, getDocs} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'

//css
import './Register.css';

const Register = ({setUserData}) => {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[pass, setPass] = useState('')

    const dbref = collection(db, 'userData')

    const navigate = useNavigate()

    const submit = async (e) => 
    {
        if (name.length === 0 || email.length === 0 || pass.length === 0 )
        {
            alert("Please fill all form data!")
        }
        else {
            e.preventDefault()
            try {
                const user = await app.auth().createUserWithEmailAndPassword(email, pass)
                if (user) {
                    const addData = await addDoc(dbref, {name:name, email:email})

                    if(addData) {
                        const getUser = await getDocs(dbref)
                        const user_snap = getUser.docs.map((doc) => ({id:doc.id, ...doc.data()}))
                        const userdata = user_snap.find((doc) => doc.email === email)
                        
                        setUserData(userdata)
                        alert("Account Created!")
                        navigate('/home')
                    }
                    else {
                        alert("Error occured!")
                    }
                }
            } catch(error) {
                alert(error)
            }
        }
    }

  return (
    <>
        <main className='register'>
            <div className='header headr'>
                <h2>signup</h2>
            </div>

            <div className='box_input'>
                <input type='text' value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
            </div>

            <div className='box_input'>
                <input type='text' value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='box_input'>
                <input type='password' value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)} />
            </div>

            <p>Allready Have an Account <Link to='/'>Login Now</Link></p>
            <button onClick={submit}>Register</button>
        </main>
    </>
  )
}

export default Register;