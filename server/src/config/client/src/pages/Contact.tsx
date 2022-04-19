import { stringify } from 'querystring'
import React, {
  useState
} from 'react'
import axios from 'axios'
import { Header } from '../components'
import { baseURL } from '../helpers/axios-helpers'
import './Contact.scss'

interface NewMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const sendMessage = async (newMessage: {}) => {
    await axios.post(`${baseURL}/api/contactus`, newMessage)
    .then(res => {
      clearInputs()
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newMessage: NewMessage = {
      name,
      email,
      subject,
      message
    }
    sendMessage(newMessage)
  }

  const clearInputs = () => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }


  return (
    <div className="page contact">
      <Header/>
      <main className="main">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className='form-container'>
          <label className='form-inputs'>
            Name (VS username, Discord username, or IRL name is acceptable): 
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name here.'
              className='inputs'
              />
          </label>
          <label className='form-inputs'>
            Email: 
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email here.'
              className='inputs'
            />
          </label>
          <label className='form-inputs'>
            Subject: 
            <input
              type='text'
              name='subject'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder='Subject'
              className='inputs'
            />
          </label>
          <label className='form-inputs last-input'>
            Message:
            <textarea
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Message goes here.'
              className='inputs'
              wrap='hard'
              rows={10}
            />
          </label>
          <div className='button-container'>
            <button onClick={handleSubmit}>
              Send Message
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
