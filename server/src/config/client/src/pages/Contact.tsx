import { stringify } from 'querystring'
import React, {
  useState
} from 'react'
import { Header } from '../components'
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newMessage: NewMessage = {
      name,
      email,
      subject,
      message
    }
  }


  return (
    <div className="page contact">
      <Header/>
      <main className="main">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className='form-container'>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter your name here.'
            className='inputs'
          />
          <input
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email here.'
            className='inputs'
          />
          <input
            type='text'
            name='subject'
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder='Subject'
            className='inputs'
          />
          <textarea
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Message goes here.'
            className='inputs'
            wrap='hard'
            rows='10'
            col='30'
            resize='vertical'
          />
        </form>
        <p>Coming Soon</p>
      </main>
    </div>
  )
}
