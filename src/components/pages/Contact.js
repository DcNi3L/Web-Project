import React, { useState } from 'react'

//css
import './Contact.css';

const Contact = () => {
    const[user, setUser] = useState(
        {
            name: '', email: '', subject: '', message: ''
        }
    )

    let values, names 
    const data = (e) =>
    {
        values = e.target.value
        names = e.target.name
        setUser({...user, [names]: values})
    }


    const send = async (e) =>
    {
        const {name, email, subject, message} = user
        e.preventDefault()
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, subject, message
            })
        }

        const send = await fetch(
            'https://react-project-3b5c8-default-rtdb.firebaseio.com/Message.json', option
            )

        if(send) {
            alert("Your Message Send!")
        }
        else {
            alert("Error Occured, Send Failed!")
        }
    }

  return (
    <>
      <main className='contact'>
        <div className='container'>
            <div className='form'>
                <h2>contact us</h2>
                <form method='POST'>
                    <div className='box'>
                        <div className='label'>
                            <label for='name'>Name</label>
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Name' value={user.name} name='name' onChange={data}/>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='label'>
                            <label for='email'>E-mail</label>
                        </div>
                        <div className='input'>
                            <input type='email' placeholder='E-mail' value={user.email} name='email' onChange={data}/>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='label'>
                            <label for='subject'>Subject</label>
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Subject' value={user.subject} name='subject' onChange={data}/>
                        </div>
                    </div>

                    <div className='box'>
                        <div className='label'>
                            <label for='message'>Message</label>
                        </div>
                        <div className='input'>
                            <textarea placeholder='Message...' value={user.message} name='message' onChange={data}></textarea>
                        </div>
                    </div>

                    <button type='submit' onClick={send}>Send</button>
                </form>
            </div>
        </div>
      </main>
    </>
  )
}

export default Contact;