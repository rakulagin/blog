import React, {  useState } from 'react'
import { readMessages } from '../firebase/firestore'
import './form.css'

const MessageList = () => {
    const [messages, setMessages] = useState([{
        header: '',
        text: '',
        date: '',
        imgURI: ''
    }])

    const loadMessage = async () => {
        try {
            const data = await readMessages() // вызов функции считывания из облака
            setMessages(data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='messages'>
            <button onClick={loadMessage}>LOAD</button>
            {messages.length > 1 &&
                messages.map(i =>(
                    <>
                    <h3>{i.header}</h3>
                    <div>{i.text}</div>
                    <div>{i.date}</div>
                    </>
                ))
            }
            </div>
        </>
    )
}


export default MessageList
